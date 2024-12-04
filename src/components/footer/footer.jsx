import './footer.css';
function footer() {
return(
    <footer>
        <ul>
            <li>
                <div class = "footer-items">
                    <a href = "/">
                        <div class="item">Home</div>
                    </a>
                    <a href="/about">
                        <div class="item">About</div>
                    </a>
                </div>
            </li>
        </ul>
    </footer>
);
}

export default footer;