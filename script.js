function get_content(id) {
    let query = document.getElementById("out");
    query.innerHTML = "";
    let str;
    switch (id) {
        case 'about':
            str = "<p>Name: Ivan</p><p>Last name: Snitko</p><p>City: Saint-Petersburg</p><p>Uni/Studying: HSE SPb PADII</p><p>Age: 17</p>";
            break;
        case 'skills':
            str = "<h3>Skills:</h3><ul><li>Python (Matplotlib, Pandas, Sympy, Django, Flask)</li><li>Java (Spring)</li><li>C++</li><li>JavaScript, HTML, CSS</li><li>Git</li></ul>";
            break;
        case 'contacts':
            str = "<p>Email: ivan_snitko@gmail.com</p><p>GitHub: <a id=\"git_l\" href=\"https://github.com/IviScrap\" target=\"_blank\">GitHub</a>";
            break;
    }
    query.innerHTML = str;
}