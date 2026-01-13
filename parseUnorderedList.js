function parseUnorderedList(markdown) {
    /*const items = markdown .split("\n") .map(line => line.replace(/-\s+/, "")) // remove leading "- "
    .map(text => `<li>${text}</li>`) .join(""); return `<ul>${items}</ul>`;*/


    let result="<ul>"
    markdown.split("\n").forEach(element => {
        element = element.replace("-", "").trimStart();
        result +="<li>"+element+"</li>"
    });
    result+="</ul>"
    return result;
}

parseUnorderedList("-  Item A\n- Item B")
parseUnorderedList("-  JavaScript\n-  Python")
parseUnorderedList("- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla")
parseUnorderedList("- A-1\n- A-2\n- B-1")