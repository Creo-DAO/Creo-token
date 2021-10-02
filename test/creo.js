const Creo = artifacts.require("Creo");

const tokens = (n) => web3.utils.toWei(n, `ether`);
const decTokens = (n) => web3.utils.fromWei(n, "Ether");

contract("Creo", function (accounts) {
  describe("First Tests", () => {
    let creo, tsupply, bal1, bal2, checkAppr;
    before(async () => {
      creo = await Creo.deployed();
    });

    // Test 1: it should have a  name, symbol, decimal and cap

    // it("Should have correct value for all view methods", async () => {
    //   const name = await creo.name();
    //   assert.strictEqual(name, "CREO DAO test", "Name not corresnponding");
    //   const symbol = await creo.symbol();
    //   assert.strictEqual(symbol, "Creo", "Wrong Symbol");
    //   const dec = await creo.decimals();
    //   assert.strictEqual(dec.toString(), "18", "Wrong decimal");
    //   const cap = await creo.cap();
    //   assert.strictEqual(
    //     cap.toString(),
    //     tokens("200000"),
    //     "Wrong cap, or Cap not given"
    //   );
    //   tsupply = await creo.totalSupply();
    //   assert.strictEqual(
    //     tsupply.toString(),
    //     tokens("150000"),
    //     "Wrong total supply1"
    //   );
    //   minSupply = await creo.minSupply();
    //   assert.strictEqual(
    //     minSupply.toString(),
    //     tokens("50000"),
    //     "Wrong minimum supply1"
    //   );
    //   const burnFee = await creo.burnFee();
    //   assert.strictEqual(burnFee.toString(), "1", "Wrong fee");
    //   const mintLeft = await creo.mintAmountLeft();
    //   assert.strictEqual(
    //     mintLeft.toString(),
    //     tokens("50000"),
    //     "Wrong mint bal"
    //   );
    // });
    // // Test 2: Should mint successfully
    // it("It Should Mint as programmed", async () => {
    //   // try {
    //   await creo.mint.sendTransaction(tokens("10000"), {
    //     from: accounts[0],
    //   });
    //   // assert.fail(true, false, "Transaction did not Throw");
    //   // } catch (error) {
    //   //   assert.include(
    //   //     String(error),
    //   //     "revert",
    //   //     `Expected revert but got ${error}`
    //   //   );
    //   // }

    //   bal1 = await creo.balanceOf(accounts[0]);
    //   assert.strictEqual(
    //     bal1.toString(),
    //     tokens("160000"),
    //     "Incorrect minter bal"
    //   ); //check minter bals

    //   tsupply = await creo.totalSupply();
    //   assert.strictEqual(
    //     tsupply.toString(),
    //     tokens("160000"),
    //     "Wrong total supply2"
    //   );
    // });

    // it("It Should have specified roles", async () => {
    //   const owner = await creo.owner();
    //   assert.equal(owner.toString(), accounts[0], "Not Owner");

    //   const notOwner = await creo.owner();
    //   assert.notEqual(owner.toString(), accounts[1], "Not Owner");
    // });

    // it("It Should transfer and transferFrom successfully, and also adapt to feeChange", async () => {
    //   const setFee = await creo.setBurnFee(2);
    //   const burnFee = await creo.burnFee();
    //   assert.strictEqual(burnFee.toString(), "2", "Wrong fee2");
    //   // initial balance and total supply check before transfer
    //   bal1 = await creo.balanceOf(accounts[0]);
    //   assert.strictEqual(
    //     bal1.toString(),
    //     tokens("160000"),
    //     "Incorrect balance1"
    //   ); //check acct0 bal

    //   bal2 = await creo.balanceOf(accounts[1]);
    //   assert.strictEqual(bal2.toString(), tokens("0"), "Incorrect balance2"); //check acct1 ba;

    //   tsupply = await creo.totalSupply();
    //   assert.strictEqual(
    //     tsupply.toString(),
    //     tokens("160000"),
    //     "Wrong total supply3"
    //   ); //check total supply is correct

    //   // Send transaction, then confirm balance and total supply
    //   const send = await creo.transfer.sendTransaction(
    //     accounts[1],
    //     tokens("10"),
    //     { from: accounts[0] }
    //   ); //send transaction

    //   bal1 = await creo.balanceOf(accounts[0]);
    //   assert.strictEqual(
    //     bal1.toString(),
    //     tokens("159990"),
    //     "Incorrect balance3"
    //   ); //check bal0 is correct

    //   bal2 = await creo.balanceOf(accounts[1]);
    //   assert.strictEqual(bal2.toString(), tokens("9.8"), "Incorrect balance4"); //check bal1 is correct

    //   tsupply = await creo.totalSupply();
    //   assert.strictEqual(
    //     tsupply.toString(),
    //     tokens("159999.8"),
    //     "Wrong total supply4"
    //   ); //check total supply is correct

    //   // Send transferFrom, then confirm balance, allowance & total supply
    //   const approve = await creo.approve.sendTransaction(
    //     accounts[1],
    //     tokens("1000"),
    //     { from: accounts[0] }
    //   ); //approve acct 1 from acct 0

    //   checkAppr = await creo.allowance(accounts[0], accounts[1]);
    //   assert.strictEqual(
    //     checkAppr.toString(),
    //     tokens("1000"),
    //     "Incorrect approval1"
    //   ); //check acct1 has correct approval

    //   bal1 = await creo.balanceOf(accounts[0]);
    //   assert.strictEqual(
    //     bal1.toString(),
    //     tokens("159990"),
    //     "Incorrect balance5"
    //   ); // check acct0 balance still correct

    //   bal2 = await creo.balanceOf(accounts[1]);
    //   assert.strictEqual(bal2.toString(), tokens("9.8"), "Incorrect balance6"); //check acct1 bal still correct

    //   const sendFrom = await creo.transferFrom.sendTransaction(
    //     accounts[0],
    //     accounts[1],
    //     tokens("100"),
    //     { from: accounts[1] }
    //   ); //do transfer from

    //   checkAppr = await creo.allowance(accounts[0], accounts[1]);
    //   assert.strictEqual(
    //     checkAppr.toString(),
    //     tokens("900"),
    //     "Incorrect approval2"
    //   ); //check acct1 has new correct approval

    //   bal1 = await creo.balanceOf(accounts[0]);
    //   assert.strictEqual(
    //     bal1.toString(),
    //     tokens("159890"),
    //     "Incorrect balance7"
    //   ); //check bal0 is correct

    //   bal2 = await creo.balanceOf(accounts[1]);
    //   assert.strictEqual(
    //     bal2.toString(),
    //     tokens("107.8"),
    //     "Incorrect balance8"
    //   ); //check bal1 is correct

    //   tsupply = await creo.totalSupply();
    //   assert.strictEqual(
    //     tsupply.toString(),
    //     tokens("159997.8"),
    //     "Wrong total supply6"
    //   ); //check total supply is correct
    // });
    // it("It Should perfom approve functions correctly", async () => {
    //   let iallow, dallow;
    //   let approve = await creo.approve.sendTransaction(
    //     accounts[1],
    //     tokens("1000"),
    //     { from: accounts[0] }
    //   ); //approve acct 1 from acct 0

    //   checkAppr = await creo.allowance(accounts[0], accounts[1]);
    //   assert.strictEqual(
    //     checkAppr.toString(),
    //     tokens("1000"),
    //     "Incorrect approval3"
    //   ); //check acct1 has correct approval

    //   dallow = await creo.decreaseAllowance.sendTransaction(
    //     accounts[1],
    //     tokens("500"),
    //     { from: accounts[0] }
    //   ); //decrease approval

    //   checkAppr = await creo.allowance(accounts[0], accounts[1]);
    //   assert.strictEqual(
    //     checkAppr.toString(),
    //     tokens("500"),
    //     "Incorrect approval4"
    //   ); //check acct1 has correct approval

    //   iallow = await creo.increaseAllowance(accounts[1], tokens("200"), {
    //     from: accounts[0],
    //   }); //increase approval

    //   checkAppr = await creo.allowance(accounts[0], accounts[1]);
    //   assert.strictEqual(
    //     checkAppr.toString(),
    //     tokens("700"),
    //     "Incorrect approval4"
    //   ); //check acct1 has correct approval
    // });
    it("It Should transfer and burn as required", async () => {
      const setFee = await creo.setBurnFee(1);
      const burnFee = await creo.burnFee();
      assert.strictEqual(burnFee.toString(), "1", "Wrong fee2");
      // initial balance and total supply check before transfer
      bal1 = await creo.balanceOf(accounts[0]);
      assert.strictEqual(bal1.toString(), tokens("1500"), "Incorrect balance1"); //check acct0 bal

      bal2 = await creo.balanceOf(accounts[1]);
      assert.strictEqual(bal2.toString(), tokens("0"), "Incorrect balance2"); //check acct1 ba;

      tsupply = await creo.totalSupply();
      assert.strictEqual(
        tsupply.toString(),
        tokens("1500"),
        "Wrong total supply3"
      ); //check total supply is correct

      const cap = await creo.cap();
      assert.strictEqual(
        cap.toString(),
        tokens("2000"),
        "Wrong cap, or Cap not given"
      );

      const mintLeft = await creo.mintAmountLeft();
      assert.strictEqual(
        mintLeft.toString(),
        tokens("500"),
        "Wrong mint bal"
      );

      await creo.mint.sendTransaction(tokens("200"), {
        from: accounts[0],
      });
      await creo.mint.sendTransaction(tokens("300"), {
        from: accounts[0],
      });

      tsupply = await creo.totalSupply();
      assert.strictEqual(
        tsupply.toString(),
        tokens("2000"),
        "Wrong total supply3"
      );

      // Send transaction, then confirm balance and total supply
      const send = await creo.transfer.sendTransaction(
        accounts[1],
        tokens("1000"),
        { from: accounts[0] }
      ); //send transaction

      bal1 = await creo.balanceOf(accounts[0]);
      assert.strictEqual(bal1.toString(), tokens("1000"), "Incorrect balance3"); //check bal0 is correct

      bal2 = await creo.balanceOf(accounts[1]);
      assert.strictEqual(bal2.toString(), tokens("990"), "Incorrect balance4"); //check bal1 is correct

      tsupply = await creo.totalSupply();
      assert.strictEqual(
        tsupply.toString(),
        tokens("1990"),
        "Wrong total supply3"
      ); //check total supply is correct
      const send2 = await creo.transfer.sendTransaction(
        accounts[0],
        tokens("990"),
        { from: accounts[1] }
      ); //send transaction

      bal1 = await creo.balanceOf(accounts[0]);
      assert.strictEqual(bal1.toString(), tokens("1990"), "Incorrect balance3"); //check bal0 is correct

      bal2 = await creo.balanceOf(accounts[1]);
      assert.strictEqual(bal2.toString(), tokens("0"), "Incorrect balance4"); //check bal1 is correct

      tsupply = await creo.totalSupply();
      assert.strictEqual(
        tsupply.toString(),
        tokens("1990"),
        "Wrong total supply3"
      );
      const send3 = await creo.transfer.sendTransaction(
        accounts[1],
        tokens("990"),
        { from: accounts[0] }
      ); //send transaction

      bal1 = await creo.balanceOf(accounts[0]);
      assert.strictEqual(bal1.toString(), tokens("1000"), "Incorrect balance3"); //check bal0 is correct

      bal2 = await creo.balanceOf(accounts[1]);
      assert.strictEqual(bal2.toString(), tokens("990"), "Incorrect balance4"); //check bal1 is correct

      tsupply = await creo.totalSupply();
      assert.strictEqual(
        tsupply.toString(),
        tokens("1990"),
        "Wrong total supply3"
      );
    });
  });
});
