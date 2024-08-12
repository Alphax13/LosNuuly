       // ข้อมูลค่าปรับและจำคุก
       const penaltyData = [{
               name: "เงินแดง",
               fine: "X2",
               prison: "5"
           },
           {
               name: "ตั๋วอาวุธ",
               fine: "500 EA",
               prison: "5"
           },
           {
               name: "เพรชฟ้า",
               fine: "1,000 EA",
               prison: "5"
           },
           {
               name: "Lockpick",
               fine: "500 EA",
               prison: "5"
           },
           {
               name: "Kaiju",
               fine: "1,500 EA",
               prison: "5"
           },
           {
               name: "Blue saiya",
               fine: "เงินแดง",
               prison: "5"
           },
           {
               name: "Weed Pack",
               fine: "เงินแดง",
               prison: "5"
           },
           {
               name: "Coke Pack",
               fine: "200 EA",
               prison: "5"
           },
           {
               name: "Drug Book (ตำรา)",
               fine: "500 EA",
               prison: "5"
           },
           {
               name: "เพรชฟ้า",
               fine: "1,000 EA",
               prison: "5"
           },
           {
               name: "ถุงห่อศพ",
               fine: "5,000 EA",
               prison: "0"
           },
           {
               name: "โลมา",
               fine: "150 EA",
               prison: "5"
           },
           {
               name: "กระเบน",
               fine: "100 EA",
               prison: "5"
           },
       ];

       // ข้อมูลค่าปรับและจำคุก ตาราง2
        const penaltyData2 = [
            {
                name: "<strong>โจรกรรมยานพาพหนะ</strong> <br> อายุความ 6 ชั่วโมง<br> <span style='color: red;'>เรียกค่าเสียหายได้ไม่เกิน 5,000</span>",
                fine: "5,000",
                prison: "10"
            }, 
            {
                name: "<strong><span style='color: red;'>โจรกรรมยานพาพหนะ (เจ้าหน้าที่)</span></strong> <br> อายุความ 6 ชั่วโมง<br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
                fine: "10,000",
                prison: "10"
            }, 
            {
                name: "<strong>ปล้นบ้าน</strong>",
                fine: "5,000",
                prison: "10"
            }, 
            {
                name: "<strong> งัดตู้ไฟ</strong>",
                fine: "500",
                prison: "5"
            }, 
            {
                name: "<strong><span style='color: red;'>กรรโชกทรัพย์ (ปล้น,ยักยอก หรือข่มขู่ การโอนเงินผิด) </span></strong> <br> อายุความ 24 ชั่วโมง<br> <span style='color: red;'>คืนของกลางให้ผู้เสียหาย / คดีแดง / ไม่สามารถประกันเวลาได้</span>",
                fine: "5,000",
                prison: "30"
            }, 
            
        ];

               // ข้อมูลค่าปรับและจำคุก ตาราง3
               const penaltyData3 = [
                {
                    name: "<strong>ข่มขู่คุกคาม </strong> <br> <span style='color: red;'>(ข่มขู่ด้วยวาจาหรือการกระทำ , ทำให้รู้สึกอันตราย , อันตรายถึงชีวิต)</span>",
                    fine: "1,500",
                    prison: "10"
                }, 
                {
                    name: "<strong><span style='color: red;'>ทำร้ายร่างกาย</span></strong> <br> อายุความ 12 ชั่วโมง<br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
                    fine: "2,000",
                    prison: "15"
                },
                {
                    name: "<strong><span style='color: red;'>ทำร้ายร่างกายจนสลบ</span></strong> <br> อายุความ 24 ชั่วโมง<br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
                    fine: "5,000",
                    prison: "20"
                },  
                
                
            ];


       function createTable(data, tableId) {
           const table = document.getElementById(tableId);
           data.forEach((item, index) => {
               const row = table.insertRow(-1);
               const cell1 = row.insertCell(0);
               const cell2 = row.insertCell(1);
               const cell3 = row.insertCell(2);
               const nameWithOrder = `${index + 1}. ${item.name}`;
               cell1.innerHTML = nameWithOrder;
               cell2.textContent = item.fine;
               cell3.textContent = item.prison + " นาที";
           });
       }


       createTable(penaltyData, "penaltyTable");
       createTable(penaltyData2, "penaltyTable2");
       createTable(penaltyData3, "penaltyTable3");
       createTable(penaltyData4, "penaltyTable4");


       createTable();