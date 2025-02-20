import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Index";
import Index from "./pages/company/Index";
import Ceo from "./pages/company/Ceo";
import History from "./pages/company/History";
import Partner from "./pages/company/Partner";
import Location from "./pages/company/Location";
import Good from "./pages/good/Good";
import Detail from "./pages/good/Detail";
import Header from "./components/Header";
import { useState } from "react";

export interface PartnerType {
  name: string;
  link: string;
}

function App(): JSX.Element {
  const partnerList: PartnerType[] = [
    { name: "삼성", link: "http://" },
    { name: "LG", link: "http://" },
    { name: "그린컴퓨터", link: "http://" },
  ];
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div>
        <Header>
          {isLogin ? <div>정보수정/로그아웃</div> : <div>로그인/회원가입</div>}
        </Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/company">
            <Route index element={<Index />} />
            <Route path="ceo" element={<Ceo />} />
            <Route
              path="history"
              element={<History title="좋은 회사" year={1999} />}
            />
            <Route
              path="partner"
              element={<Partner partnerList={partnerList} />}
            />
            <Route path="location" element={<Location />} />
          </Route>
          <Route path="/good" element={<Good />}>
            <Route path=":id" element={<Detail title={"좋은 회사"} />} />
            <Route path="delete/:id" element={<h1>제품 삭제 페이지</h1>} />
            <Route path="modify/:id" element={<h1>제품 수정 페이지</h1>} />
          </Route>
        </Routes>
        <footer>하단</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
