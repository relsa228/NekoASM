const ToolsLayout = (props) => {
    return (
        <>
            <header>Header</header>
            {props.children}
            <footer>Footer</footer>
        </>
    );
}

export default ToolsLayout