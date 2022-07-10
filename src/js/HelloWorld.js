import '../css/components.css';

export const HelloWorld = () => {
    const title = document.createElement('h1');

    title.innerText = `Todo App`;

    document.body.append( title );
}
