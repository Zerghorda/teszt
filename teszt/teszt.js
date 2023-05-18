import Jatekter from "../Jatekter.js";
QUnit.module("jatéktér ell", function (hooks) {
  let jatekter;
  hooks.before(() => {
    jatekter = new Jatekter();
  });
  QUnit.test("ellenőrzés létezik?", function (assert) {
    assert.ok(jatekter.ellenorzes, "létezik");
  });

  QUnit.test("ellenőrzés létezik?", function (assert) {
    assert.ok(jatekter.getVizszintes, "létezik");
  });

  QUnit.test("ellenőrzés létezik?", function (assert) {
    assert.ok(jatekter.getFuggoleges, "létezik");
  });

  QUnit.test("ellenőrzés létezik?", function (assert) {
    assert.ok(jatekter.getAtlo, "létezik");
  });
});

QUnit.module("get visszint ell", function (hooks) {
  let jatekter;
  hooks.before(() => {
    jatekter = new Jatekter();
  });
  QUnit.test("üres lista", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    assert.equal(jatekter.getVizszintes(), "   @   @   @");
  });

  QUnit.test("X nyert", function (assert) {
    jatekter.lista = ["X", "X", "X", " ", " ", " ", " ", " ", " "];
    assert.equal(jatekter.getVizszintes(), "XXX@   @   @");
  });

  QUnit.test("O nyert", function (assert) {
    jatekter.lista = ["O", "O", "O", " ", " ", " ", " ", " ", " "];
    assert.equal(jatekter.getVizszintes(), "OOO@   @   @");
  });

  QUnit.test("space mellet", function (assert) {
    jatekter.lista = ["X", "O", "X", " ", " ", " ", "X", "O", "X"];
    assert.equal(jatekter.getVizszintes(), "XOX@   @XOX@");
  });

  QUnit.test("X nyert", function (assert) {
    jatekter.lista = [" ", " ", " ", "X", "X", "X", " ", " ", " "];
    assert.equal(jatekter.getVizszintes(), "   @XXX@   @");
  });

  QUnit.test("O nyert", function (assert) {
    jatekter.lista = [" ", " ", " ", "O", "O", "O", " ", " ", " "];
    assert.equal(jatekter.getVizszintes(), "   @OOO@   @");
  });
  
  QUnit.test("space mellet", function (assert) {
    jatekter.lista = [" ", " ", " ", "X", "O", "X", "X", "O", "X"];
    assert.equal(jatekter.getVizszintes(), "   @XOX@XOX@");
  });

  QUnit.test("X nyert", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", "X", "X", "X"];
    assert.equal(jatekter.getVizszintes(), "   @   @XXX@");
  });

  QUnit.test("O nyert", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", "O", "O", "O"];
    assert.equal(jatekter.getVizszintes(), "   @   @OOO@");
  });

  QUnit.test("space mellet", function (assert) {
    jatekter.lista = ["X", "O", "X", "X", "O", "X", " ", " ", " "];
    assert.equal(jatekter.getVizszintes(), "XOX@XOX@   @");
  });
});
