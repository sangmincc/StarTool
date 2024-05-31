document.addEventListener('DOMContentLoaded', function() {
    fetch('tools.csv')
        .then(response => response.text())
        .then(data => {
            window.toolData = parseCSV(data);
        });
});

function parseCSV(data) {
    const lines = data.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return result;
}

function searchTool() {
    const toolNumber = document.getElementById('tool-number').value;
    const tool = window.toolData.find(t => t['공구 번호'] === toolNumber);

    if (tool) {
        document.getElementById('quantity').textContent = tool['수량'];
        document.getElementById('location').textContent = tool['위치'];
        document.getElementById('share').textContent = tool['공유'];
    } else {
        document.getElementById('quantity').textContent = '-';
        document.getElementById('location').textContent = '-';
        document.getElementById('share').textContent = '-';
        alert('해당 공구가 없습니다.');
    }
}
