import React, { FunctionComponent } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FlexRowNoWrap, Flex } from "../shared/primitive-ui/flexbox";
import { AbsolutePosition, HrLine } from "../shared/primitive-ui/global";
import { HeaderThree, IconText, Paragraph } from "../shared/primitive-ui/text";
import { PrimaryButton } from "../shared/primitive-ui/button";
import { generalSkin } from "../shared/primitive-ui/skin";
import { Theme } from "../shared/primitive-ui/theme";

export const ProfileSkin = styled.div((props) => ({
  ...generalSkin(props.theme),
  background: props.theme.type === "light" ? "#FFFEEE" : "#333333",
  borderRadius: "12px 0px 12px 0px",
}));

type DivisionType = "top" | "middle" | "bottom";

interface DivisionProps {
  type: DivisionType;
}

const definePadding = (type: DivisionType) => {
  switch (type) {
    case "top":
      return { paddingBottom: "46px" };
    case "bottom":
      return { paddingTop: "20px" };
    default:
      return { padding: "20px 48px 0px 48px" };
  }
};

const defineBorder = (type: DivisionType, theme: Theme) => {
  const top = { borderRight: `2px solid ${theme.main.borderColor}` };
  const bottom = { borderLeft: `2px solid ${theme.main.borderColor}` };
  switch (type) {
    case "top":
      return top;
    case "bottom":
      return bottom;
    default:
      return { ...top, ...bottom };
  }
};

export const Division = styled.div<DivisionProps>((props) => ({
  ...definePadding(props.type),
  ...defineBorder(props.type, props.theme),
}));

const OnBorderNoContent = styled.div(() => ({
  flexGrow: 1,
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OnBorderContent = styled(Flex)((props) => ({
  minWidth: "212px",
  position: "relative",
}));

const TopOnBorderContent = styled(OnBorderContent)(() => ({
  justifyContent: "start",
}));

const BottomOnBorderNoContent = styled(OnBorderNoContent)(() => ({
  alignSelf: "flex-end",
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BottomOnBorderContent = styled(OnBorderContent)((props) => ({
  justifyContent: "end",
  flexDirection: "row-reverse",
  paddingTop: "38px",
}));

export const HeaderIntro = styled(HeaderThree)(() => ({
  fontFamily: "CooperHewitt",
}));

export const TopDivision: FunctionComponent = () => (
  <Division type="top">
    <FlexRowNoWrap>
      <TopOnBorderContent>
        <AbsolutePosition style={{ top: "-50px", left: "35px" }}>
          <img
            style={{ height: "100px", borderRadius: "100%" }}
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA2RXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAAAAAAAAAAP/gABBKRklGAAEBAAABAAEAAP/bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAIwAjAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0UsIsxgDp/OtS2HI4/+tWXpbZC/T8q1rRA/wB715r42n8J6hdtztAz9Pp0q5bSFB67vTtVaBMJ+FTAbRzu9eK0i+gFtiVBIqGeTbGwzy3WmvdeWvzfmDWZe37P935d3fjmhysByvx6+PXhn9nX4f3nijxXqH2LTrdvLijjAe4vpiCVggjJHmSEAnGQAqszFVVmH5P/ALYH/BXXxh8cZdUs7PVI/Bng6FZWFhYXmyW5RRnbdTqhkZwoZuDHEuBmNjhz5R/wVo/bJ8UftF/tb+IfCemSXU1npOrXHhbQNPaQpHE0E/kTSsmQFae4hDMZMHYpDI2xAvb/AAN/4I22fipdPufil4uumubfEltp+ibNtoQ2RuuJUJcg/MSqoN3TaAK3liMNhYxq4reWy3OvA5XisdJxw60W7eiR88t+0hY6hMVk/dTbBG0gvQ0pYfK4Xap8sMcEMuwKPmLkIVG14R/aeuNAktr7T9S1a3kWF5VurO7jt2Vt+Nkm11lhlxsyCEKqxG0eYXr9FvhL/wAENfgD4o01hc6X4g1f92kbTXWryneE+6NilUABwRhccDoOK6LxD/wQU+Aem+GrZU0fWIvscZH7vUWXzRg78gghd3cJtHHoSD68MxjOlz8j5fl/mKeSzhU9k6keb5/5Hjf7G/8AwWl1zwna2uj+Pp28baerJCLwTqmq24BAbeT96T5lBinO4MMedzx+m/wt+KmhfFzwVY+IvDeqWes6Lqke+C6t33L0GUYdUkXOGRsMp4Ir8jPjn/wR98O2WhX118PfEV/b63ZkNBZapse3nw25oy6puXdjIOCA3YqWU7H/AAQg/ax1Xw1+0DefCrW7iaGDxFFc/wDEvndx9i1C1jMofDbvneCKVCFch1jjYZVFryY1sNiYuphnqt0VmGV4nASjHELR7NbM/Ym2mb1q1HLkfxMPQ9qyLKcun+1/PjNXoJck7fm9R61CdzjLycj7wOD6Uxj9PpnpUazhj3XPWlkIiXd37UwPG/2/n8n9i74mSZK7dBuee4+WrHwq0m38OeEIbG1hSO2tcRxKo2hVCqB0qp/wUBm2fsVfE49SNBuCfyq/8Pbj7RoPmfd8yTdyM9VWueMv9ot5Hdh43ot+Zf0xsBf8+la1q2FU5+9171h2D/u1/Ie4/wA/1rXtZN3b0/z/AErOnLQ4TWgbt1BqTcyH14/CqdpJuTnP4/5/D8KsSy7o2+9n27VoBXuJmYZ3d+1RxSrDdQuwZljkVsDvg5/pQPnGehI/OoGiMqMo5J44FDV1ZmiPwf8AhT8A9Jsf2ovGWoavc6fd69oXirU7OJ9khzJb3c0ZZN4IWMNHuyM5Mv3mO4D6b8EfGTXPE2n3o0xpmvrVpEdJUHzDacYOf6Vw37RfwMvvBn7avxwWRzprXnjG41H7RLmNY4NQQaruDE9EF4V687B9K4L/AIeKWvwHnU+E/h/J4709VzdanEJlaBs4PmosbFejYIBUjBDc4Hl46jPEV4pa6fcfc5FiqOGwnM9O/mfZf7OP7ZHiDS/E0NnqUDxNIvllyuFzjHA969B+Nn7ZOrXWlf2bpdrM1xJw8gG3A+or4t/Z2/4Kl+Bv2gLldOuPDcPhnUrHby84LTHcwO3Kg/d2nGM8ke9bf7Tn/BVTwn+zVLa2Oh6Bp/irXLu4DyRSyN+6i9goJZs4G3IHuDiuONTHKo8Em0e/KOXumse0nb8/Q9Zl+KGo213b/bm/eTSEud3Y/lXnv7O/wv0vwt/wUh+HfiKzaCNbzxFOrohwxNxY3aA7MHGZGQEjAIGCOted+Ev+CgOj/tI+M4I/FPgqfwDa6hGEsNSJlVWkIOAyOicYXGU3dRjPOPoz9kz4RX3jf9uP4d3RWS6h8LR6pquoPGCylIbYRQsxHAxc3NuR9T71pl9GrhMU4PqtfM8nP8TQxeB9ot1t5H6RWDHj8DV2Nwe+OpBzVC3DK2cE85APvmrR+Qbsdugr3oux+d8pYWTcnPP4cU5piw+83Hr2qFfm5DdeaNmP4m/OtOYk8d/4KEvt/Yg+KLf9S/cfy61T/Zz1eTXvhjb3E0j3DeYybzzwABjoP5VJ/wAFEJCv7DPxSP8A1AJwPyFZv7MN8svwsh8vCotw4AB6cL7D+VccZWxKfkz1ML/u8vVfqdvp53J0PXjBrXtSAvrt/pWHp0+P8961bWTa3Hrxz/n1qae55vU07aXYfqOas79q7e2Mg1QibK+wGR9O4qwDtXhiF69a6AcQQ4T6V5n+2VqN7pv7IvxWm0u6urHUV8H6utpdW7sktrM1lKiSoy4KlGIbcCCNue1emRFSny9Pesvxr4TtPHngnWNBvw32DXrC40y62qGPlTxNE+ASMna5wCRUy2NqUkppy2uj8Y/h1a+LPjx8Htc8MeLta1O68UWXiGfw1NczB1dYrW1t1GxHPyIS8jAKAp8wkAZxXjEX/BNz4ieANfutF1jTPit4r8PX4Mcf/CMarb6coRkZSjxTo8WMkNnjoeh5r3f9pO18X/sjfEjXdO1uO/XUtJ1eC+hvpLdlh1aAxLB58MpVVnDJHC7OBu3ytvWNw0afUv7L/wC2tb/E3wvG8Yea4WPdKmO4HOO/515NbGYnC1VUgvce+l9T9AwOBwONpum/iTdtbaM+OP2PP+CVlr8N/wBofw9rXiTTdS0ixuL0ibSr64ju/s0LtlFZl+8wHykk4IZepBZr37cX/BKVfEn7Ufi7WNFg8Sz2mjakVNjoBt45Ps6SP5ixmWWMLIeAGyyqByp3Bk+y/hd8b/hd8UfjFHHqnxG8N22rWt/Ks+kx3A+0WbQuAVkz3zkYUcYPJ2nHoviz4heF9G+Ol1qnhrXNH1pL/Uws1tDdg3ErzbnYopOW2kHcOo684xUxx+L9r9akldu1uvLbex6Dy3BOj9Ug3ZK9+nNdaX/Q/K7wV+wl8Xvifd2On2/ij4oW2laeDHLL40sYnRkCqFjiiW6nZeVclw4B3gAfLX0N8RtE8efDLwXoPhrwv4iu7TWJLpxqd7CDvks7a3kupTncNhxbhQ5BZS+BgncPr39o39pzTPB9hNbxSxWs6oWdAMMSeAP/AK1fPX7L2gz/ALWf7S2l6Ot1d2unmG61DVpYYlkP9no0KTwElTsW4D/Zy3BAnJHIoliq+IxVo2svK3/DnHiMHhcHhOaV7vu76H6n3n7nUrnaq/LM+AOAOSOKkVvNX/PFU2ned2kI+eRizduTzTlYM3o1e0fm5aEnlnP8OOKSSXP06etQgnH3jz71HM69yCV9T0p3J5Txz/gondbv2F/ir6L4fnJ/SpvhJBDpXhUwW0a28KzNtVRgdF5qp/wUGff+xF8UFO3b/wAI/cfyFeWf8E2vFt94q/ZZ02+1G7mvLya8uQ8sz73bD4GSeegFc3K3XUuyPQw8rUml3PdNLVgqls9a3LNsbenUDPpWLp3Ttx6VrwbR9B1/Cppys7nCacLAfxe3171KWZVxn6Zqpby5Vf7wABHSrEcmPu88cjNdMZXVwJoWyMfNwO9Pb6VAsgY5wwK+2KcJWP8A9amB8Q/8FvvgHqXxE+EnhnxlYLBJZ+DnuLLVUEf702121uqPuzyqSxJxjjzGPGOfz3+Cf7VEP7G+iSXF/a28l1JcpAhuZDHDGjuFaRyATtUNk+w6jqP15/4KQQTz/sL/ABN+yuyXEelw3CMpOQY723kzx6bc++K/I651/Q/i14Q0PxnodsIry03aZrFgF3/Y5pUbEZ7mN1V2jfrheuQa1hh4VoOFRXR6uXYypQfNSdnsUf2gPgx8Ef2i/FeoeLNP+J3hn4b+OtUkW4a7utQntre5cqTJtmMYjDMnOfMy2cck893+yr8IPhN+xR40vfivJ42PxH8TeH9JYm6n1iCRE8xArSoj4kjXyyUQycEHKthhjzzQv2yvDP7NtvdaDr3wX+G/ia2kOP8AiYeGrOTzCGzv3PCw3E8nsDnA55vTfFfwD+0T4httU0X4J/DHw39ikEyLpugW0Y3dAD5cSKedpyVJGPlI3NneNF+yVNN8vrf5XPX+sU1V9r7rn2s1r37HqX7Qf7R2n/tDSWeraHHMqapGJDGygPEcDhsE8j/6+ea+wv8Agi58Gb7QfD3jTxlqNjHHa6pJBpWi3RLF7iGEym5flNoHn4QFXLMUbegAiZvh+50fw/8As0/CvTptSnW98V+Kt8ulaU3yzSoWP75lzuSBf7/G7G1Tk5H7WeDdPg8O+CdD022hW2tdN0+3tIoVXYIlSJVCgdiMcj1rl+qqhpE83NMyniUlL+rG5QRkVT+08feUL35p4u9pwak8Unz8uGY9j9aQ8Ie3bik80fdYHnrxxTZXyP65oA8U/wCCjEptP2FfivJn/V+HbjGfwxXG/sWfDT/hTvwQh0GSYXbWt7O3mc/xENj9a6n/AIKSThf2DPi1H0ZvD0yrnuxKAfqRVL4c68vhbw79n1XVtJhvJJDI0IuIg0AwAEbLH5uMn0Jx2rnc2q6t2PSwkVKk15nfWJwB6D8cVq28mfXg81jac+4YP/6+a1bN8be//wBbrWcTzTQhbZ9373K8+lWd3G4elUElxt55zirFsGuZVhhWSSWRtqxohZmPoAOSfYV009gLJfHVf1psczTXCxRqzyucKq5YsfYDrXZaL8DbpLVbrXrpdJt5OUtwwa5m9gOQD9Nx6ggGuvtPB1nok8kGn2rWlvBAPMdzma4Zs4LNycDB4zjJ6YxXr4bK6tTWfur8Tlq4qMdtT5x+Ofh638YeB7zw1q1rJNpuuRS2moRh/LaSEo0ciK2Dtb5+GwcFQRnFfg/+1V8CfFH7BPx0vtM1AXRtNWTzLTULdDHb69Zhxi5jGSFdSQJYiSYpGH31Mcsn9CnxQ8Lt/bqxr8wWN5VX/Z3jdx25dT77vavC/wBqP9lzwt+0/wDCi88J+MNJ/tLTZz50LI/l3Wm3AVlW5tpQC0MyhjhhkMCyOrxs8bexLL4QppU91+Jnh8dKMnzbP+tD8WbT9qa31Ke1j1hhHpbKfIuk0qPUp8jggLuRsZB+9g4xxySLEv7eWg+BFb+y4IdcuI2KQ28+nx2XlPwUYxwvIW6OCruuMr04rD/bI/4JPfEr4A/Ef+z9F0HxH4+8O6g5Gm6tounPPLkAnyLuCMEwzBUJDD93IBlGDBo4/pj/AIJif8EGrrxLNp/jD4y2N1p+l4WW18JrM0Vxc9Dm+ljOY1xz5ETCTJG94yHibmo4Ok5e7BXPYqZpU9nZ1Hb8Q/4JQ/sj+L/22/jTdfGT4leZf+HbS/8AN+0zIFTXbmNsJZ26bQq20WAJcKECqIF5aTyv2g0/w7qF/ps00KPdeQd0ijJc5BYkDv0Y4HPHSsXwV4QsfCun2OnabY2ljp+nQpb21rawLb29rEnCRRxoAkaKoACKAFAwBXsXwrs501VYbWGaZlKSzyAmOK2IBKBm7uQ2QoyQDuOBt3ehWwMJUvZv1v5ngyxk5T5vwPK4rlZV+U5UmpN7ANuzyOoPNe8eNvgxpvjK+t2uI47C6uEdTeWygEyjBUODgOpXcMn5uAA3NeU+N/hPrPw9aR7yH7RYKf8Aj7hUlB/vg8ofrxngE181iMDUpa7o7qdaMvUxIpW3nd8vpinvNhSGYc8dearxhWXpk4wfc0pOw8k+neuE2OI/aN+E1r8dPgl4k8IXyRtbeILJrZ9y7grbg6t6ZV1Vh7qK/PC4/wCCFcLSf8flj+FjHiv1FkZXXbzzxnFVZpYYWwzqp9C4X+dctbCqpLmu0bU60oKyOK05/mH1J/lWnHL5abi2AP0NZenhQOMtg9M9K9W+B3hi2s5l1i9CvMP+PONhkR/9NSP73ZfQc9cEdGDwk8RUVOHzOWrVVOPMybwr8Cbq70+3vNavv7Kjuf8AV2sduZ7uU+hTICEgZyc47gdK9G8LaBa+EYGXRbJbOQrh7hlFxezj13HKrn+4i49CTWlLBCmiyXgfylaRy0jNwnHr2AIU5q/YIjsJoVVlRcrhsqR/n86+yw+X0aOsVr3PLqVpT0ZQsrC1tIft6N57P83nFt7SH/eOT7fh7Va8k2pCSMv2i4Jlk47AD5foAAOvYmuf+Iviq38HWks/mR7WdHjiJJjkuGzt6c7f42HqB2JFa3gH7Rqmmfabhpri4VRB5s+fvHLMVI4K4I2kdRnmuzpcz6nH/Erw2p+z3235LfDsT2XBV8/RC5x6gelfO/7Tfx+0f4EwnTbaxm8TeNr63abT/DlnkzyL2mnIDGGAddxBZgDsBwzJ9aaxAsulz2900cqOGLNNhIwvPU+mM59u/WvG9G/Z+0H4eNqB0PS4odUupTfXd3cSPcXupTZ/eNPcSbpZHYDGXYnp0qt1YmJ8h/C/U/GniA/294jt9RsbzUlPm2jxmS1ijOR5YRWVFUcfKxOCQTkksa+l/G7xJ+z78YNSuNH8NXOreBZpYmvljnLx3CtGjM8CKhRHRi4Dbwvy7SNv3fuzwb8NIdd0e1uFgaONl+V0faQcntjOO49scVD4k8KW/hvxBIv2c3UkgXCD2VfmOQePmUcZOTwDzjCNFJ3TNHLSzRR+EPiHw/8AFLwZaeJtBu4dU0a8GY5I/vFwQDE6/eSQMQrKRlSfcE+p6Tt8OaZJN9hm3wozs0cYX7Q+3cQASMk+5GP0rmPhx4J0yz1m61qDTY7XVL1Fju3tmaM3gjUiPegISVlXdsLhmUFypUbq9F1e3ZfCUklwn2FIwBtYqTKW+UDPbLMBxg8Vcn0ZEV1L+m3EWuaVtWbzLe6jWWCQdvcehB7U3RtWmmE0bBWnhG1onY7TjjAPYHA9R14ry74Q+LtQ8J+MrrwrrDNs8xjaSP8AejI5Cf7rDn6/WvTw0ceomTcFZlBIGM8//XzUyjZ2LjK5wfjT4EWPiLzrvQGXS7xSRJYyL+7Zhz8oHK5HPygjjAVeTXlGuaLeeHdR+y31u9vOo3AHlXHTcrDhl4xkEjII9q+l9QtFlHmH5W+4c9WGeAf5juDXL/GLQP7X8DxwvtaaSbzFkdAZE64IbGRyqgnqVyMnIrycTlsKnvU9H+DOqniHHSR4K7jOKr/L3z+BqS5ja3meOQbZIyUIqPy/9n9K+fcWnZnpQvujk9Fjga4H2h1SJFLEE4MmP4R35OAcc4yRyK6608bfZNStbeORQ0lukiDPHzbiuB6bdoFeU+PPFVt4fmtIZNokZHn84jAgQdcseBkBm5IG2FySApNVfEXjVl1Hwze25YPqGjReWOeLq0SYMuD6TWTxkdcvX13D+DjHDKbWsvy6Hz+OrOVS3RH1N4J8dN4j8Am8W1tbgx2lrf8A+kE+WiyQRy8DorD5zu4xjrmtOLxXfT+IFttMjXzNolkufM3RwoefmBB3fTqe1eDfBfxtpTeFFW+1RbHR4bcadIzMdnk217e24DgZOHhktiAcDDKSQKm1f4sw+NLPQ9L8C6kZmut1vPexho1kvpEeF0kGFLrawiZnA4DYxgsK9R0/eMueyueueCLGD45fFma+uB5nh3Q55IYRklLy7/jIyT8i7gO/RR2NeqWd+stvcIY/LmtZ5I3gQ7mUDBXjspQo3p831rkfhfo1n8OvDtnp9sPJs7GMRZbli38UjEDLMzfMx7lj61ej1uK8jbay3WycTSKuI5Y2LNsYAkYO3gMWU4UlWDKUbnqauy2NYbEl1rseoanJtRoZtPZWKNlQqsDiQsR93GcEZAKSddvGX4i0C2v5NqyfZbhHKKudv0THXPbGOfQ9a0r25tDq1mTdeXeKD5TbdksyFlVlZcDapZozuwoDFduM7Tz1nJqa6lqUetNov2WbmwtrR5ZHCYwpd5FRVbajfu1BC9mwq5z9pZ8r9PT1K5bq5q+AbS88P6BpklxMixmBYpLeWFYnRgOQQMe3YY9Oak1zR5LvxiupLDss5LV4TLFjlswYVz3BAcgc/dJ9qsafotr4jtI7i+ure4fbmNCNzAAn5yx55GMenTnrRpjrHeXAtZDcabtEUkHUxdMuDnoeRnsPeny7BcbKv9iw+czeWd2Nz9UPPTHGNoZvcKfSrmk+K4fGLWtvqG5Ps19HzGhdLh0w6x9Ozbc9srjgggcx4GXVtT0vVGvtU026kWaWGzv7KOSRXhMhTmOUFfM+UjcrOpYIPmVQC7WL3T9G037Laww6tDZldtnDOLjzSTkCZssNpHzFpSd5OSsjBA0Qmpq6KleJs/tA+BJPEEH9s6Pt/tnSGDMq43SgYcA/7QyCPw7VW8P/ABLh8c+B7K8VZPtV04tnjUFdkvIOccr3POMdODWrH8TrLwZqUek6tGy/In2idE/dpNJhtoXkhRnAzyqBeTjNcf8AExV+DviS81K1kaOx1SJ50MUhXFwFJ+VsgAyRb8HP3lbp1rSCb0J80dtZXLeH1jW4la43DMUTZabj2JJIx6446ZrD+LPj2JdSjsVkUm0h/ed8SOOR17AA/wDAq8t+Dmr6l4nupNUl1RfEGmxn7TJbNcEajoEgOFheYMiyLk7iyuOYyUJBwfN/EXxmbxBfSXnmTMtzEuos0kjO0UMzYtUJYltxgEUjBjkGZR1NdFPD3lYzlUsjrdW1qO+8USQg8yRmVeOuCAR+oP50BWA+7+teYWvjH/iYaJqfRZtXlsGYnqhS3J79vMz+PpXq/wBnUnt+VfL55QVKvdfaX49T1MDW5qdn0PjD9pD4hyW/xpvYxDcWS6JpBZbwgCOVo5bSTcCemz7Q2XxjCqQSFbGL4U+KDeKvhxq2naRHu8R+DbtNdsdOZj5fkzOrGGFsZNvLPDOik5ZZtT8k72h3ydX8U/Acfi/4q+G5tQ1ia+0/xm2o+GJFkJ/4liXlncJAqjOOLjygGHUkHqOPjCbxPr3wJ+IFjeXTzW91oU9xpt9Aj+XNJCcLPHE/VZIysdzGBknygYsMDX12Hp+yoxh2SPEb55t9z6U+Dn7W9rZ6r4gs7K+tU0++0WfWdOk1B2itxPA1qhhmIKlVkt47YMisCEjkYN84Ne6fs6/taY8GeF7rR7DT/FHxQ8YQT3C2Nq6R2nh+289llluSoCwu7EAREKQPLHAdN354+P8AXbf4d/FCy8XQxwLpd9I8t/EoK2skNwrRTvGF4FvKJXOzOYHzESY/s0kvpn/BOD9tGz/Z3+InizwzqXhaw8jSZWg1bWbidby+nibd/ZttbxqVMYcPO7OUYsUmyYysayKpXV7SNfY6XR+u3hfxhr9j4dt3vLWF76Q/6dLZK940JODlIg0bSKucHb8+eVR+g6DQdbsdf06AXF9pd5OZpot1tdCzu1O4/dhd/OUjA3APuOAPLbrXivwY+OFh8SLbZo+gX+h30yqc6izzK8eCBIogEhwJBsxncG5PFeoeGPH11GGt1uW16S6kMn2jSrK6bSnXjh7jZKn8JDYYYG4/LXNUj0SNIs6xvsvi21aSFv7OvHiMMMkZRpgArSRSJG+ULDzfM+ddxDgnG7FaCwTPZ2zFoZ9S8uQCRYDF5G75d6Bi+VbAym5twxkt34Wz8a2HirSGmn8Lpqkv9sz2slvBDFcBJkkcLOwkYD50VHEpIG2RGyFbcdjxzqV9eWX2HTby1s9SaUJbG7lMlr5uVAcqu6TCnPyAhW2tGwXzAw44S91zirv7rmrjqk9Cey0C51a1t7e1tTY6VcZdriMjMi5P7tR1Vjxx0APy8YqTVtdbwJrtrbz6TPcQrjbDbh2cqcDbwOf4fl54x3xnr/hxeWtr4WtYrySHasQOXbdNg/dY4JGD2x1HYdK534y6NeeMri1i0ueK1l+ZzcyBIzdQfuo5FDOpww8z5VIwzEAnYXFVUqy5LpXfYUYq+5JLZreWmktpMltDpsMIRrWK0ZfNjRAoiiAIEaDoTt+UEKAhKutDVfDWmvfWehrq99Z3GlrHcLaqqq7xSSs7hXHzx7ZGAwhG0LESQBuFTxVpUPh/wM0Oo6Xqms2KrH5ka263vmKWBEqww4Hyvy2yME4BGdrCsUfEDw7pfjDXLNmt47/RdLs5by5kg8mGzinMghQxsY/LJVBhGC43xE524WZWU0tLv79r2XTp+BSXuh441DS7LXJvD8lm8cjbXsooHYXCNJtzOybCEjDMC0kjhCWyXLEKfJ/i18R/Fnwv06PRtf1W18SeFbp2jhuI7cRm3YfxbfmbYjY4BKnG3jmvQf8AhLm0azvLxbPQ47OYx+dPaXSyWcxwSIm8neu9cBidwx8+0kCvk79sz9rPT/DfhzXvDviu58LXf+is9m/hq/NxNoc6sEt1MJIQ5ndI9ryhmZyT3NehTic0tXY6f4lfF/R/A3gS10WVbWbUvEkbWLC3geO7/s6MeXdSnLuMyIzwRuhyZ7ouoPkSAeeeMfilDH4Vt5Gu7i61XxNqNxqNzJaWrW1uqQqEJ33CI6QxGVY+Lck+WoH3XdPlzU/HepeO/Gkeqa1qzaelwkNkZVBmaG2iXaqRxAhpWYl9q/KpLMXZVJJ6/TPido/iXWtS8ZXtpqEfgLwlDb2NvbzShJLgR7vs1hEy/wCtu7maSWWafAS2S4kKAypE6dkJKKuyOW6se2/Fb4hR+E9K8G+G7TaurWqf2zfxowZre5vTE0EDMw3blgihkHT5LiPg4Br60YMpxKq+YPvbPu574z2zX5hfDvxTq3xJ+IMPijXZVabWNTm1S5lRNkcoiO6Yxj+GJWPlRrwAtuyDhOP1D1AeXezArzvPY+v0r5XiSTvT+f6Hp5ekm16HxZ4wvptR+BtxfaBD5mpaJcyapbJtwVvLO4NzC/OcFZYgCM4OGA44p37UnwP8P/F3T7D4j6UkEvhvxpp8F1f2wbaZjt3R4C5/fg5ALZAIk3FFVnXmPgV8SdS1TQ7mOTyfs891cBoAG8sDMo4Gf9gHPqSe9ep/sj6eNF+GXjfwZDLOdH8KvDe6Zuf99atcMHZVYYwqsSUwAyk5BzzX13LY8OOp8j6v8DZvD+iS+DfEUEyaFfSN/YN6xEzaZcEH/RJCfl3FSy4ICvhozhgu3y74IfCe5tte8aaaumyT61Zvp2neYrlTPbwQytbiCVxh2USuMNhiu0M27aB9V/Gqzt7zSZbZ7eHy55JbN22ZkZEClcucsSCByTwRnrzXmnwu/aX8QfBj4U6lfaTb6NNq2reIbmKTULyzFxcReTbWYVo8nYrHcSTtJycjFceMorQ66MnY9t/Zs/a8174ceEru18ReH9a8J6ZpECq+oXEEnm36t8qQKjW8i7Th5HwgbbBgNmvqD9nr436v+1ZoV5eWc9xqVnpd80l7eXHmaRa2CGGKSN5FaNTdzBVU5OyNdkmGBRWb8rvjT+2D8R/itdWMfiDxVql+kMn7hBM1vHbk4+ZEiKqGGThiCfevtf8A4J5/EHVvi38K/FS6xc/vNCltpIpraNbeS5eKOeVHmZAPMYSSM4LfdOAu0ACsY+/aNymuXU+sPHXirVPBP9j6torWviKG9vTp88dmm+5t1kZDDLGhk8sxJIX3FWkyQoU/ISNpfiNpPht9D0zUdV1STxDfPLF/a1zYDUZDsikkzO0caRmGNVKj7uC6YBJIrjfhtYp9gsbltzyS6FBqZ3ncBNdI+7GeyImxO+HkZizuznvPh78OEvdPuNeXWNet8Rsract0HsWKIqo4jdWMbLwcxsuTknJZs89WDhO6b1aXovL1/wCCVCXMrHXaX8aPD3grTtPh1XVltNQhRoZLGO1CAFWKl1KqNykjKnkMCDk5zTfEvxt8Ly3qaglxZWqyWzXDatcxiBHjAKm2YsuNuASxYrtCqw37So57w94esdWuXhmtLdvIQ7H2DeFDvtXP91QAAOwqxq/hG38Z+H9c0uaW6tRbiCS2ubaTZcWrtuTfGTkKwGCDjggfSqkkgV9jkPH3xG8RQ6Zean4Hk/4Sy3t7by/sGly28vnTSPhJIyRkSpvUSys/lqpX5SWG25pngzxPbiPzo7O+uIkjnnTQWHnSXBhCsdzriRVG5M3ZiVomjVnmZnjXy3xJFffA3X49H03XvE2oGK6sIzf6lq09xfMb1kEzeduBU4KhQm1V8tSBkuW898QeFmtvifeaH/a2uSw6a9vNbXM160tzH5+ZGBZsh8FnAZwzkSMGZuMKjQk223ZtJ23S9NOpU6ita3+fzNX9o/8AbVvPht4/v9D1aDQ4RqIFnK01nNDqWojygjwyyyMsKPuXy1iVX2bEYBX2lfir9v8A/Y68STfBiHx1efY/CMOlXFtreg6ZqePMlmWWMwZgXPyorbnYBl52rv3NWH8Rv+CgHxW8O/Fy58M+HfFV/wCF9Ju9Qkkih06Ryuno7nEVukzSJHGoO1QFyAAM16B8bPBlx4P+C1v4u1HxH4j8Ya/4vhW3vLrxDcpdtHve3UuhVFO4CV9pcsF4IAIzXfHX3DGV4vmPN/gn8AtU1jRJtS1C8msdHt4t+q67qb7phFj5wsYOFLAELGCC38TKgYr6b4T/AGdtY/abnsZJI5vBvwo8Jxs0M10duyPGZbhuMNcSAYyQAowAAoVB6z4X8N2PiD4k2fhq8t47jQvDoS4hsnGYbqXIHmTL/wAtDxnHC9BjAAHP/tTfELVvHEWreHbi7ks9DXxVZeFo7KyJt4YrRypkYKvHmuPlLHIAPyhetaKmT7RswfABt/F2o32uaXp32DwzeRRaLoNv5DMLXTfMW3g3cZ8yWSbznwcgTuScgA/oZdzRSXUjMRlnJ5HXmviXTbeCw+Leh6PHbxi1Gp6ZHGed0MaXttiNBnaF45GMn1r7SeBWkbOev0r5Pid2qwj5HqZb70ZM/9k="
          />
        </AbsolutePosition>
      </TopOnBorderContent>
      <OnBorderNoContent>
        {" "}
        <HrLine />{" "}
      </OnBorderNoContent>
    </FlexRowNoWrap>
  </Division>
);

export const MidDivision: FunctionComponent = () => (
  <Division type="middle">
    <Paragraph>
      <code>
        Hi. I'm a software engineer building apps and dApps for the web. My core
        skills are centered around the Javascript, PHP, JVM and Ethereum
        ecosystems.{" "}
      </code>
    </Paragraph>
    <br />
    <Paragraph>
      <code>
        You may also find me entrepreneuring, gisting about blockchain, reading
        about Space, singing horribly, watching soccer or simply surfing the
        internet and learning new stuff.
      </code>
    </Paragraph>
  </Division>
);

export const BottomDivision: FunctionComponent = () => (
  <Division type="bottom">
    <FlexRowNoWrap>
      <BottomOnBorderNoContent>
        {" "}
        <HrLine />{" "}
      </BottomOnBorderNoContent>
      <BottomOnBorderContent>
        <Link href="/connect">
          <a>
            <PrimaryButton
              style={{
                position: "absolute",
                top: "10px",
                right: "16px",
              }}
            >
              <IconText color="#FFFFFF" icon={["far", "envelope"]} />
              <span>GET IN TOUCH</span>
            </PrimaryButton>
          </a>
        </Link>
      </BottomOnBorderContent>
    </FlexRowNoWrap>
  </Division>
);

export const Profile: FunctionComponent = () => {
  return (
    <ProfileSkin>
      <TopDivision />
      <MidDivision />
      <BottomDivision />
    </ProfileSkin>
  );
};

export default React.memo(Profile);
