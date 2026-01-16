type SectionHeaderProps = {
    title: string
    bgColor?: string
    onClick?: () => void // method
    onLogger: (message: string) => void
}

// on_
// handle_

export const SectionHeader = ({ title, onClick, onLogger }: SectionHeaderProps) => {
    return (
        <section>
            <h1 className="text-2xl text-red-500">{title}</h1>
            <button onClick={onClick}>Click me</button>

            <div>
                <button
                    onClick={() => {
                        onLogger('321321312')
                    }}
                >
                    Logger
                </button>
            </div>
        </section>
    )
}
