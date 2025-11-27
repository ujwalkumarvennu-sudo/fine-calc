import { calculateGST } from './utils/formulas';

const testGST = () => {
    console.log("Testing GST Calculator Logic...");

    // Test Case 1: Exclusive 18% on 1000
    // GST = 180, Total = 1180
    const t1 = calculateGST(1000, 18, 'exclusive');
    console.log("Test 1 (Exclusive 18% on 1000):", t1);
    if (t1.netAmount === 1000 && t1.gstAmount === 180 && t1.totalAmount === 1180) {
        console.log("PASS");
    } else {
        console.error("FAIL");
    }

    // Test Case 2: Inclusive 18% on 1180
    // Net = 1000, GST = 180
    const t2 = calculateGST(1180, 18, 'inclusive');
    console.log("Test 2 (Inclusive 18% on 1180):", t2);
    if (t2.netAmount === 1000 && t2.gstAmount === 180 && t2.totalAmount === 1180) {
        console.log("PASS");
    } else {
        console.error("FAIL");
    }

    // Test Case 3: Exclusive 5% on 500
    // GST = 25, Total = 525
    const t3 = calculateGST(500, 5, 'exclusive');
    console.log("Test 3 (Exclusive 5% on 500):", t3);
    if (t3.netAmount === 500 && t3.gstAmount === 25 && t3.totalAmount === 525) {
        console.log("PASS");
    } else {
        console.error("FAIL");
    }
};

testGST();
