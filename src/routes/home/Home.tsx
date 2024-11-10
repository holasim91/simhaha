import List from "@/components/List.tsx";

export default function Home() {
    return (
        <main className="w-full flex gap-[24px] justify-center relative">
            <aside
                className="sticky top-[100px] flex flex-col items-center justify-center w-[150px] min-w-[150px] m-[10px]">
                <section className="flex justify-center items-center w-full min-h-[100px] text-center bg-amber-100">LEFT</section>
            </aside>
            <article className="w-[1060px] min-w-[1060px] py-[24px] px-0 flex flex-col items-center">
                <section className="flex flex-row items-end justify-between w-full">
                    <div className="flex flex-col py-[16px] px-0">
                        <div className="gap-[8px] flex flex-wrap items-center">
                            <h1>전체 인기글</h1>
                        </div>
                    </div>
                    
                </section>
                <List />
            </article>
            <aside
                className="sticky top-[100px] flex flex-col items-center justify-center w-[150px] min-w-[150px] m-[10px]">
                <section className="flex justify-center items-center w-full min-h-[100px] text-center bg-amber-100">RIGHT</section>
            </aside>
        </main>
    )
}
