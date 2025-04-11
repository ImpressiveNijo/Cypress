class GaragePage {
  get addCarButton() {
    return cy.contains('button', 'Add car');
  }

  get brandDropdown() {
    return cy.get('[id="addCarBrand"]');
  }

  get modelDropdown() {
    return cy.get('[id="addCarModel"]');
  }

  get mileageInput() {
    return cy.get('[id="addCarMileage"]');
  }

  get submitCarButton() {
    return cy.get('.modal-footer > .btn-primary');
  }

  addCar(brand, model, mileage) {
    this.addCarButton.click();
    this.brandDropdown.select(brand);
    this.modelDropdown.select(model);
    this.mileageInput.type(mileage);
    this.submitCarButton.click();
  }
}

export default new GaragePage();
