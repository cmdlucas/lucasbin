---
title:  Build APIs with GraphQL in PHP - Getting Started
author: Caleb Lucas
datePublished: 27/05/2019
headerImage: graphql-php.png
lastModifiedOn: 27/05/2019
tags: 
    - graphqL
    - laravel
    - php
---

{START}

_This walkthrough / guide is intended for those who have basic knowledge about building APIs._

**GraphQL** has been on a hype recently; to be fair, it's worth it. The need might be quite insidious when building less complex APIs, however, as with all applications, increasing the API capabilities increases complexity in some way and therefore requires a newer approach to handling this complexity without causing pain to the consumers of our API - even when it's only us.

> **"A query language for your API".**
> -[_Official Website_](https://graphql.github.io/)

This simply means, we have a language with which we can query our API from the front-end (or even back-end). The goal here is to provide us with some consistency and extra power when building APIs. Issues like API versioning can be handled more subtly, thus reducing the need to force users to update their applications for trivial stuff.

**For example:**

Imagine we had an application with some endpoints: 

`http://localhost:8000/api/v1/rooms`

`http://localhost:8000/api/v1/make-rooms`

`http://localhost:8000/api/v1/say-hello`

Introducing GraphQL, our application now presents just one endpoint:

`http://localhost:8000/api`

All that consumers need to do now is send us a query string on this endpoint; we process the query using GraphQL and respond with data. Quick, intuitive, powerful.

_Moving forward..._

I want to focus on using GraphQL in PHP as so much explanation already exists for  NodeJS (Express) in the [official docs for GraphQL](https://graphql.github.io/graphql-js/running-an-express-graphql-server/).

At this point, you should read the [docs](https://graphql.github.io/learn/) to fully understand how GraphQL works before proceeding.

**DISCLAIMER:**

This is probably not the only valid implementation of GraphQL in PHP. You can choose to explore other options as well.

Set Up
------------------------------

I'll be using  [Siler](https://siler.leocavalcante.dev/) (a micro-framework with GraphQL functionality built-in) for my stand-alone app, then I'll show you the set up with my [Laravel](https://laravel.com/) app.

Also, it is more comfy to play with GraphQL in the browser using the [ChromeiQL](https://chrome.google.com/webstore/detail/chromeiql/fkkiamalmpiidkljmicmjfbieiclmeij?hl=en) extension.

Siler with my stand-alone app
------------------------------

Let's dive straight into the code. [See repo here](https://github.com/cmdlucas/siler-gql-play):

Clone repo into your directory

`git clone https://github.com/cmdlucas/siler-gql-play.git`

then run

`composer install`

The project is set up to have two major dependencies in order to listen and respond to GraphQL requests:

- `webonyx/graphql` - This is the core PHP implementation of the GraphQL standard. It processes the query from the incoming request and responds with the data as specified on our resolvers. 

- `leocavalcante/siler` - This wraps the core package above and adds another major functionality: enables us declare Schema Types and resolvers expressively. It basically parses our  Schema Types declaration string together with the resolvers array, then sends it to the package above.

To avoid bumping into a `class does not exist` error, you can run:

`composer dump-autoload -o`

With our setup completed, we can now run our server and test queries on ChromeiQL

`php -S localhost:8000 server.php`

Now, start the  ChromeiQL extension (ignore any initial error),  set the endpoint into `http://localhost:8000/api`, then paste this query on the left side of the page loaded:

```graphql
query Rooms {
   hello
   rooms{
     key
   }
}
mutation MakeRooms ($keys: [ID!]) {
  makeRooms(keys: $keys) {
    info {
      keyToBin
      timestamp
    }
    key
  }
}
```

Look bottom-left, drag up the area labeled QUERY VARIABLES and paste this into the text box:

```
{
  "keys": [23, 455, 75, 746] 
}
```

When you click the Run button, you have the option to select from the dropdown between `Rooms` (which represents the label of *query* above) and `MakeRooms` (which represents the label of *mutation*).

**Note:** If we were to send this query without using ChromeiQL, we would either want to send the `Rooms` query or `MakeRooms` mutation. Within either of those, we can specify as many "sub-query" declared within either *Query* or *Mutation* as supported in the schema in our *schema.graphql* file (located in */src/config*). 

```
type Info {
    keyToBin: String!
    timestamp: Int!
}

type Room {
    info: Info!
    key: Int!
}

type Query {
    hello: String
    rooms: [Room!]!
    roomsHavingKey(search_keys : [ID!]!): [Room!]!
    roomsNotHavingKey(search_keys : [ID!]!): [Room!]!
}

type Mutation {
    makeRooms (keys: [ID!]): [Room!]!
} 
```

([Go here](https://graphql.github.io/learn/serving-over-http/) to see how to send queries over http) 

After selecting which type to run, you can see the server's response is as specified within the query sent. This means we can do so many things in a single query to the server - be it a `Query` type or a `Mutation`. Alles gut? Okay...

As you can see, within the `type Query {}` schema above, we specified `roomsHavingKey` and `roomsNotHavingKey`, but there was no need to include it in the query sent to the server since we (the caller) did not need any of that information. But hey, let's try to get that information.

In your ChromeiQL, change the query field's content to this:

```
query Rooms($search_keys: [ID!]!) {
   rooms{
     key
   }
   roomsNotHavingKey(search_keys: $search_keys) {
     key
     info{
       keyToBin
       timestamp
     }
   }
 }
 mutation MakeRooms ($keys: [ID!]) {
   makeRooms(keys: $keys) {
     key
   }
 }
```

In the `QUERY VARIABLES` area, change the content to this:

```
{
   "keys": [23, 455, 75, 746],
   "search_keys": [23, 75]
}
```

To get some result, first we run and select `MakeRooms`, then we run and select `Rooms` from the dropdown. As a result of the latter action, we get this response from the server:

```
{
   "data": {
     "rooms": [
       {
         "key": 23
       },
       {
         "key": 455
       },
       {
         "key": 75
       },
       {
         "key": 746
       }
     ],
     "roomsNotHavingKey": [
       {
         "key": 455,
         "info": {
           "keyToBin": "111000111",
           "timestamp": 1558951933
         }
       },
       {
         "key": 746,
         "info": {
           "keyToBin": "1011101010",
           "timestamp": 1558951933
         }
       }
     ]
   }
 }
```

This ran just as expected. The rooms sub-query returns a list of room objects each with the key property only. Also, since we specified it too, the `roomsNotHavingKey` sub-query returned a list of rooms with keys other than the keys in the search_key list specified in the QUERY VARIABLES.

We can take this concept to a more complex level, depending on the requirements of our application. This is amazing power lying in our hands at one API endpoint!

GraphQL with Laravel
--------------------

Here, my goal is just to show you how to easily configure Siler GraphQL with Laravel using the example specified in the README of the Siler GraphQL package.

Dive straight into testing? [Go to repo](https://github.com/cmdlucas/siler-gql-laravel-play)

Firstly, create a new laravel project into any folder on your computer:

`composer create-project --prefer-dist laravel/laravel new-project-folder`

Now, install the dependencies required (which includes those required for GraphQL to be activated):

`composer require --prefer-dist leocavalcante/siler  webonyx/graphql-php`

Navigate to _/routes/web.php_ and add this:

```
use Siler\GraphQL;

class Init {
    public static function play() {
        $typeDefs = file_get_contents(__DIR__.'/schema.graphql');
    
        $resolvers = [
            'Query' => [
                'message' => 'foo',
            ],
            'Mutation' => [
                'sum' => function ($root, $args) {
                    return $args['a'] + $args['b'];
                },
            ],
        ];
    
        return GraphQL\init(GraphQL\schema($typeDefs, $resolvers));
    }

}

Route::post('/play', function() { 
    return Init::play();
}); 
```

Create a _schema.graphql_ file in the routes folder (could be anywhere else, just make sure you read it using the correct URL) and add this:

```
type Query {
  message: String!
}

type Mutation {
  sum (a: Int, b: Int): Int
} 
```

Run: `php artisan serve`

Now, we can query from ChromeiQL and get a response. Set your endpoint to `http://localhost:8000/play`, paste this into the query field:

```
query Message {
  message
}
mutation Sum($a: Int, $b: Int) {
  sum(a: $a, b: $b)
}
```

Then this into the `QUERY VARIABLES` field:

```
{
  "a": 5, "b": 6
}
```

When we run and select `Sum`, we get this:

```
{
   "data": {
     "sum": 11
   }
}
```

Very straightforward!

If you have questions, additions or corrections, please feel free to [connect and send me a message](https://lucasbin.com/connect).