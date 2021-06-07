const brainfuck = input => {
    let output = 'let cells = Array(30000).fill(0), ptr=0;';
    input.split('').forEach(token => {
        switch (token) {
            case '+':
                output+='++cells[ptr];';
                break;
            case '-':
                output+='--cells[ptr];';
                break;
            case '>':
                output+='++ptr;';
                break;
            case '<':
                output+='--ptr;';
                break;
            case '.':
                output+='document.write(String.fromCharCode(cells[ptr]));';
                break;
            case ',':
                output+='cells[ptr]=prompt();';
                break;
            case '[':
                output+='while (cells[ptr] > 0) {';
                break;
            case ']':
                output+='}';
                break;
        }
    })
    return output;
}