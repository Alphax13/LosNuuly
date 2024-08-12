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
       const penaltyData2 = [{
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
       const penaltyData3 = [{
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
           {
               name: "<strong><span style='color: red;'>กักขัง,ลักพาตัว (อุ้ม/ห่อศพ)</span></strong> <br> อายุความ 24 ชั่วโมง<br> <span style='color: red;'>**ประชาชน** (ทำร้ายร่างกายจนสลบ  , หลบหนีการจับกุม) คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "25,000",
               prison: "30"
           },
           {
               name: "<strong><span style='color: red;'>ข่มขู่คุกคามเจ้าหน้าที่</span></strong> <br> อายุความ 24 ชั่วโมง<br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "2,500",
               prison: "10"
           },
           {
               name: "<strong><span style='color: red;'>พยายามฆ่า</span></strong> <br> อายุความ 24 ชั่วโมง<br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "10,000",
               prison: "20"
           },
           {
               name: "<strong><span style='color: red;'>ทำร้ายร่างกายเจ้าหน้าที่</span></strong> <br> อายุความ 24 ชั่วโมง<br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "10,000",
               prison: "20"
           },
           {
               name: "<strong><span style='color: red;'>ทำร้ายร่างกายเจ้าหน้าที่จนสลบ</span></strong> <br> อายุความ 24 ชั่วโมง<br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "20,000",
               prison: "30"
           },
           {
               name: "<strong><span style='color: red;'>กักขัง ,ลักพาตัวเจ้าหน้าที่ (อุ้ม/ห่อศพ)</span></strong> <br> อายุความ 48 ชั่วโมง<br> <span style='color: red;'>(ทำร้ายร่างกายเจ้าหน้าที่จนสลบ , หลบหนีการจับกุม) / คดีแดง /  ไม่สามารถประกันเวลาได้</span>",
               fine: "40,000",
               prison: "30"
           },
           {
               name: "<strong>ทะเลาะวิวาท </strong>",
               fine: "1,500",
               prison: "10"
           },
       ];
       // ข้อมูลค่าปรับและจำคุก ตาราง4
       const penaltyData4 = [{
               name: "<strong>แจ้งความเท็จ </strong>",
               fine: "1,000",
               prison: "15"
           },
           {
               name: "<strong>หลบหนี </strong> <br> <span style='color: red;'>หากจับกุมแล้วยังหลบหนีต่อ จะโดนข้อหา 'หลบหนีหลังการจับกุม' เพิ่ม</span>",
               fine: "1,000",
               prison: "5"
           },
           {
               name: "<strong>หลบหนีหลังการจับกุม</strong> <br> อายุความ 12 ชั่วโมง<br> <span style='color: red;'>เจตนาที่จะหลบหนีต่อ หลังถูกล็อคมือ หรือหลังถูกจับกุมตัวแล้ว </span>",
               fine: "3,000",
               prison: "15"
           },
           {
               name: "<strong><span style='color: red;'>ก่อกวน สร้างความเดือดร้อน</span></strong> <br> <span style='color: red;'>รบกวนใช้เสียง,ทะเลาะวิวาท,ขัดขวางการทำงานเจ้าหน้าที่ / คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "1,500",
               prison: "15"
           },
           {
               name: "<strong>ปิดบังใบหน้า </strong>",
               fine: "2,000",
               prison: "0"
           },
           {
               name: "<strong>ถืออาวุธในพื้นที่สาธารณะ </strong>",
               fine: "2,000",
               prison: "10"
           },
           {
               name: "<strong>พื้นที่สุ่มเสี่ยง </strong> <br> <span style='color: red;'>อยู่ในพื้นที่ผิดกฎหมายทุกที่, หรืออยู่ในพื้นที่อันตราย , อยู่ในพื้นที่ผิดกฎหมายและไม่มีของในตัว</span>",
               fine: "2,000",
               prison: "5"
           },
           {
               name: "<strong>วางเพลิง </strong> <br> <span style='color: red;'> ทุกชนิด / ระเบิดปั้ม </span>",
               fine: "3,000",
               prison: "15"
           },
           {
               name: "<strong>อยู่ในพื้นที่บริเวณที่ไม่ได้รับอนุญาติ </strong>",
               fine: "1,000",
               prison: "10"
           },
           {
               name: "<strong>บุกรุกพื้นที่ส่วนบุคคล </strong>",
               fine: "4,000",
               prison: "10"
           },
           {
               name: "<strong><span style='color: red;'>แหกคุก</span></strong> <br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "3,500",
               prison: "10"
           },
           {
               name: "<strong><span style='color: red;'>ก่อเหตุบริเวณสถานที่ราชการ</span></strong> <br> อายุความ 24 ชั่วโมง <br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "20,000",
               prison: "60"
           },
           {
               name: "<strong><span style='color: red;'>ขัดขวางการส่งตัวนักโทษ</span></strong> <br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "3,000",
               prison: "10"
           },
           {
               name: "<strong>ทำลายหลักฐาน</strong> <br> <span style='color: red; font-size: 18px'>เก็บเข้าตู้เซฟ ฝากเพื่อน เก็บในรถ หรือ ตำรวจเห็น แล้วมาค้นตัวไม่เจออะไร ในขณะที่ทำผิดมาแล้ว ถือว่าทำลายหลักฐาน ยกเว้นฝากเพื่อนแต่ยังพบของกลางอยู่ จะถือว่าเป็นการสมรู้ร่วมคิด</span></strong> ",
               fine: "4,000",
               prison: "10"
           },
       ];
       // ข้อมูลค่าปรับและจำคุก ตาราง5
       const penaltyData5 = [
            {
               name: "<strong>อนาจารในพื้นที่สาธารณะ </strong>",
               fine: "2,000",
               prison: "5"
           },
           {
            name: "<strong>หมิ่นประมาท </strong>",
            fine: "1,500",
            prison: "10"
        },
           {
               name: "<strong>รับของโจร </strong>",  
               fine: "0",
               prison: "15"
           },
           {
               name: "<strong>หลบหนีหลังการจับกุม</strong> <br> อายุความ 12 ชั่วโมง<br> <span style='color: red;'>เจตนาที่จะหลบหนีต่อ หลังถูกล็อคมือ หรือหลังถูกจับกุมตัวแล้ว </span>",
               fine: "3,000",
               prison: "15"
           },
           {
               name: "<strong><span style='color: red;'>ก่อกวน สร้างความเดือดร้อน</span></strong> <br> <span style='color: red;'>รบกวนใช้เสียง,ทะเลาะวิวาท,ขัดขวางการทำงานเจ้าหน้าที่ / คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "1,500",
               prison: "15"
           },
           {
               name: "<strong>ปิดบังใบหน้า </strong>",
               fine: "2,000",
               prison: "0"
           },
           {
               name: "<strong>ถืออาวุธในพื้นที่สาธารณะ </strong>",
               fine: "2,000",
               prison: "10"
           },
           {
               name: "<strong>พื้นที่สุ่มเสี่ยง </strong> <br> <span style='color: red;'>อยู่ในพื้นที่ผิดกฎหมายทุกที่, หรืออยู่ในพื้นที่อันตราย , อยู่ในพื้นที่ผิดกฎหมายและไม่มีของในตัว</span>",
               fine: "2,000",
               prison: "5"
           },
           {
               name: "<strong>วางเพลิง </strong> <br> <span style='color: red;'> ทุกชนิด / ระเบิดปั้ม </span>",
               fine: "3,000",
               prison: "15"
           },
           {
               name: "<strong>อยู่ในพื้นที่บริเวณที่ไม่ได้รับอนุญาติ </strong>",
               fine: "1,000",
               prison: "10"
           },
           {
               name: "<strong>บุกรุกพื้นที่ส่วนบุคคล </strong>",
               fine: "4,000",
               prison: "10"
           },
           {
               name: "<strong><span style='color: red;'>แหกคุก</span></strong> <br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "3,500",
               prison: "10"
           },
           {
               name: "<strong><span style='color: red;'>ก่อเหตุบริเวณสถานที่ราชการ</span></strong> <br> อายุความ 24 ชั่วโมง <br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "20,000",
               prison: "60"
           },
           {
               name: "<strong><span style='color: red;'>ขัดขวางการส่งตัวนักโทษ</span></strong> <br> <span style='color: red;'>คดีแดง / ไม่สามารถประกันเวลาได้</span>",
               fine: "3,000",
               prison: "10"
           },
           {
               name: "<strong>ทำลายหลักฐาน</strong> <br> <span style='color: red; font-size: 18px'>เก็บเข้าตู้เซฟ ฝากเพื่อน เก็บในรถ หรือ ตำรวจเห็น แล้วมาค้นตัวไม่เจออะไร ในขณะที่ทำผิดมาแล้ว ถือว่าทำลายหลักฐาน ยกเว้นฝากเพื่อนแต่ยังพบของกลางอยู่ จะถือว่าเป็นการสมรู้ร่วมคิด</span></strong> ",
               fine: "4,000",
               prison: "10"
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
       createTable(penaltyData5, "penaltyTable5");


       createTable();