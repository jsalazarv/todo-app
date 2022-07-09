import '../css/components.css';

export const HelloWorld = () => {
    const title = document.createElement('h1');
    const subtitle = document.createElement('h1');
    const img = document.createElement('img');

    title.innerText = `Welcome to your`;
    img.src = 'assets/img/webpack-logo.svg';
    subtitle.innerText = `boilerplate`;

    document.body.append( title, img, subtitle );
}
