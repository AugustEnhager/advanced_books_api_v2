const { expect, factory, pending } = require('../helpers')
const { Association, DataTypes } = require('sequelize')

describe('ModelName', () => {
  // <Name>Model = factory.factories.<Name>.Model
  //const { tableName, tableAttributes, associations } = <Name>Model

  beforeEach(async () => {
    //subject = await factory.create('<Name>')
  });

  describe('Model', () => {
    it('is expected to have table name "<Name>', () => {
      // expect(tableName).to.equal('<Name>')
      pending();
    });

    describe('is expected to have property:', () => {

      it('<property>:<data type>', () => {
        // expect(tableAttributes)
        //   .to.have.own.property('title')
        //   .that.has.property('type').to.be.instanceOf(DataTypes.<DATATYPE>)
        pending();
      });

    });

    describe('is expected to have associations', () => {
      it('<AssociatedModel>:<AssociationType>', () => {
        // expect(associations)
        //   .to.have.own.property('<model_alias_or_name>')
        //   .to.be.instanceOf(Association.<AssociationType>)
        //   .that.has.property('foreignKey', '<field>')
        pending();
      });
    });
  });

  describe('Instance', () => {

    it('is expected to have a valid factory', () => {
      // expect(subject).to.include({
      //   attribute: 'Default Factory Value'
      // })
      pending();
    });

    describe('is expected to have properties', () => {
      // it('<propertyName>', () => {
      //   expect(subject)
      //     .to.have.property('<propertyName>').to.be.a('<data_type>')
      // });
      pending();
    });
    
    describe('is expected to have association accessors', () => {
      it('for the <AssociatedModel> association', () => {
        // expect(subject)
        //   .to.respondTo('get<AssociatedModel>')
        //   .and.respondTo('set<AssociatedModel>')
        //   .and.respondTo('create<AssociatedModel>')
        pending();

      });
    });
  });
});