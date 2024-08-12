       // ข้อมูลค่าปรับและจำคุก
const penaltyData = [
    { name: "เงินแดง", fine: "X2", prison: "5" },
    { name: "ตั๋วอาวุธ", fine: "500 EA", prison: "5" },
    { name: "เพรชฟ้า", fine: "1,000 EA", prison: "5" },
    { name: "Lockpick", fine: "500 EA", prison: "5" },
    { name: "Kaiju", fine: "1,500 EA", prison: "5" },
    { name: "Blue saiya", fine: "เงินแดง", prison: "5" },
    { name: "Weed Pack", fine: "เงินแดง", prison: "5" },
    { name: "Coke Pack", fine: "200 EA", prison: "5" },
    { name: "Drug Book (ตำรา)", fine: "500 EA", prison: "5" },
    { name: "เพรชฟ้า", fine: "1,000 EA", prison: "5" },
    { name: "ถุงห่อศพ", fine: "5,000 EA", prison: "0" },
    { name: "โลมา", fine: "150 EA", prison: "5" },
    { name: "กระเบน", fine: "100 EA", prison: "5" },
];

const penaltyData2 = [
    { name: "เงินแดง", fine: "X2", prison: "5" },
    { name: "ตั๋วอาวุธ", fine: "500 EA", prison: "5" },
    { name: "เพรชฟ้า", fine: "1,000 EA", prison: "5" },
    { name: "Lockpick", fine: "500 EA", prison: "5" },
];

// ฟังก์ชันสร้างตาราง
function createTable(data, tableId) {
    const table = document.getElementById(tableId);
    data.forEach((item, index) => {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const nameWithOrder = (index + 1) + ". " + (item.name || "N/A");
        cell1.textContent = nameWithOrder;
        cell2.textContent = item.fine;
        cell3.textContent = item.prison + " นาที";
    });
}

    // เรียกใช้ฟังก์ชันสร้างตาราง
    createTable(penaltyData, "penaltyTable");
    createTable(penaltyData2, "penaltyTable2");

    // เรียกใช้ฟังก์ชันสร้างตาราง
    createTable();