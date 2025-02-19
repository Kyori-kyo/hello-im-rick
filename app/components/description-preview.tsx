type Props = {
    title: string,
    body: string,
    readMore: string,
    readMoreLink: string
}

const DescriptionPreview = (props: Props) => {
    return (
        <main>
            <div className={"flex flex-col gap-4 text-secondary-foreground text-left max-w-lg"}>
                <h1 className={"text-lg font-semibold uppercase"}>{props.title}</h1>
                <p className={"line-clamp-3"}>
                    {props.body}
                </p>
                <a className={"text-lg font-semibold underline underline-offset-8 uppercase hover:scale-105 hover:text-primary"} href={props.readMoreLink}>
                    {props.readMore}
                </a>
            </div>
        </main>
    )
}
export { DescriptionPreview }