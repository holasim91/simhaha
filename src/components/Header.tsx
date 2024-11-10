import {Link} from "react-router-dom";


function Header() {
    return (
        <header className="border-b border-solid border-black">
            <section className="flex flex-row justify-between items-center w-[1060px] py-[14px] px-0 mx-auto my-0">
                <div className="flex flex-row gap-[24px] items-center">
                    <div className="text-4xl">LOGO</div>
                    <div className="flex flex-row gap-[20px] items-center">
                        <div className="text-white font-medium cursor-pointer">인기글</div>
                        <div className="text-white font-medium cursor-pointer">전체글</div>
                        <Link to="/humor" className="text-white font-medium cursor-pointer">깔깔게시판</Link>
                        <div className="text-white font-medium cursor-pointer">모목지</div>
                    </div>
                </div>
                <div className="flex flex-row gap-[20px] items-center">
                    <div className="flex flex-row gap-[8px] items-center">
                        <div className="text-white font-bold bg-[#FFFFFF33] rounded-[50vh] px-[16px] py-[12px] cursor-pointer">회원가입</div>
                        <div className="text-white font-bold bg-[#FFFFFF33] rounded-[50vh] px-[16px] py-[12px] cursor-pointer">로그인</div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header