const chaiModule = require('chai');
const glidedRoseModule = require('../app/gilded-rose');

describe('Gilded Rose - Unit Tests', function () {

    // Given
    it('Quality - Decrease', function() {
        const initialItems = [
            new glidedRoseModule.Item('Product1', 10, 10),
            new glidedRoseModule.Item('Product2', 0, 10),
            new glidedRoseModule.Item('Product3', 1, 0),

        ];
        const gildedRose = new glidedRoseModule.GildedRose(initialItems);

        // When
        const updatedItems = gildedRose.updateQuality();

        // Then
        // Item 0
        chaiModule.expect(updatedItems[0].name).to.equal('Product1');
        chaiModule.expect(updatedItems[0].sellIn).to.equal(9);
        chaiModule.expect(updatedItems[0].quality).to.equal(9);
        // Item 1
        chaiModule.expect(updatedItems[1].name).to.equal('Product2');
        chaiModule.expect(updatedItems[1].sellIn).to.equal(-1);
        chaiModule.expect(updatedItems[1].quality).to.equal(8);
        // Item 2
        chaiModule.expect(updatedItems[2].name).to.equal('Product3');
        chaiModule.expect(updatedItems[2].sellIn).to.equal(0);
        chaiModule.expect(updatedItems[2].quality).to.equal(0);
    });

    it('Quality - Keep', function() {
        // Given
        const initialItems = [
            new glidedRoseModule.Item('Sulfuras, Hand of Ragnaros', 10, 40),
            new glidedRoseModule.Item('Sulfuras, Hand of Ragnaros', -10, 40)
        ];
        const gildedRose = new glidedRoseModule.GildedRose(initialItems);

        // When
        const updatedItems = gildedRose.updateQuality();

        // Then
        // Item 0
        chaiModule.expect(updatedItems[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        chaiModule.expect(updatedItems[0].sellIn).to.equal(10);
        chaiModule.expect(updatedItems[0].quality).to.equal(40);
        // Item 1
        chaiModule.expect(updatedItems[1].name).to.equal('Sulfuras, Hand of Ragnaros');
        chaiModule.expect(updatedItems[1].sellIn).to.equal(-10);
        chaiModule.expect(updatedItems[1].quality).to.equal(40);
    });

    it('Quality - Increase', function() {
        // Given
        const initialItems = [
            new glidedRoseModule.Item('Aged Brie', 10, 20),
            new glidedRoseModule.Item('Aged Brie', -10, 20),
            new glidedRoseModule.Item('Aged Brie', -20, 49),
            new glidedRoseModule.Item('Backstage passes to a TAFKAL80ETC concert', 20, 49),
            new glidedRoseModule.Item('Backstage passes to a TAFKAL80ETC concert', 10, 48),
            new glidedRoseModule.Item('Backstage passes to a TAFKAL80ETC concert', 5, 48),
            new glidedRoseModule.Item('Backstage passes to a TAFKAL80ETC concert', -1, 30)
        ];
        const gildedRose = new glidedRoseModule.GildedRose(initialItems);

        // When
        const updatedItems = gildedRose.updateQuality();

        // Then
        // Item 0
        chaiModule.expect(updatedItems[0].name).to.equal('Aged Brie');
        chaiModule.expect(updatedItems[0].sellIn).to.equal(9);
        chaiModule.expect(updatedItems[0].quality).to.equal(21);
        // Item 1
        chaiModule.expect(updatedItems[1].name).to.equal('Aged Brie');
        chaiModule.expect(updatedItems[1].sellIn).to.equal(-11);
        chaiModule.expect(updatedItems[1].quality).to.equal(22);
        // Item 2
        chaiModule.expect(updatedItems[2].name).to.equal('Aged Brie');
        chaiModule.expect(updatedItems[2].sellIn).to.equal(-21);
        chaiModule.expect(updatedItems[2].quality).to.equal(50);
        // Item 3
        chaiModule.expect(updatedItems[3].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        chaiModule.expect(updatedItems[3].sellIn).to.equal(19);
        chaiModule.expect(updatedItems[3].quality).to.equal(50);
        // Item 4
        chaiModule.expect(updatedItems[4].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        chaiModule.expect(updatedItems[4].sellIn).to.equal(9);
        chaiModule.expect(updatedItems[4].quality).to.equal(50);
        // Item 5
        chaiModule.expect(updatedItems[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        chaiModule.expect(updatedItems[5].sellIn).to.equal(4);
        chaiModule.expect(updatedItems[5].quality).to.equal(50);
        // Item 6
        chaiModule.expect(updatedItems[6].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        chaiModule.expect(updatedItems[6].sellIn).to.equal(-2);
        chaiModule.expect(updatedItems[6].quality).to.equal(0);
    });

    it('Sellin', function() {
        // Given
        const initialItems = [
            new glidedRoseModule.Item('Product1', 10, 10),
            new glidedRoseModule.Item('Product2', 0, 10),
            new glidedRoseModule.Item('Product3', 1, 0),
            new glidedRoseModule.Item('Aged Brie', -1, 0),
            new glidedRoseModule.Item('Sulfuras, Hand of Ragnaros', -10, 40)
        ];
        const gildedRose = new glidedRoseModule.GildedRose(initialItems);

        // When
        const updatedItems = gildedRose.updateQuality();

        // Then
        // Item 0
        chaiModule.expect(updatedItems[0].name).to.equal('Product1');
        chaiModule.expect(updatedItems[0].sellIn).to.equal(9);
        chaiModule.expect(updatedItems[0].quality).to.equal(9);
        // Item 1
        chaiModule.expect(updatedItems[1].name).to.equal('Product2');
        chaiModule.expect(updatedItems[1].sellIn).to.equal(-1);
        chaiModule.expect(updatedItems[1].quality).to.equal(8);
        // Item 2
        chaiModule.expect(updatedItems[2].name).to.equal('Product3');
        chaiModule.expect(updatedItems[2].sellIn).to.equal(0);
        chaiModule.expect(updatedItems[2].quality).to.equal(0);
        // Item 3
        chaiModule.expect(updatedItems[3].name).to.equal('Aged Brie');
        chaiModule.expect(updatedItems[3].sellIn).to.equal(-2);
        chaiModule.expect(updatedItems[3].quality).to.equal(2);
        // Item 4
        chaiModule.expect(updatedItems[4].name).to.equal('Sulfuras, Hand of Ragnaros');
        chaiModule.expect(updatedItems[4].sellIn).to.equal(-10);
        chaiModule.expect(updatedItems[4].quality).to.equal(40);
    });

    it('Conjured Mana Cake', function() {
        // Given
        const initialItems = [
            new glidedRoseModule.Item('Conjured Mana Cake', 10, 10),
            new glidedRoseModule.Item('Conjured Mana Cake', -10, 10),
            new glidedRoseModule.Item('Conjured Mana Cake', 10, 1),
            new glidedRoseModule.Item('Conjured Mana Cake', 10, 0),
        ];
        const gildedRose = new glidedRoseModule.GildedRose(initialItems);

        // When
        const updatedItems = gildedRose.updateQuality();

        // Then
        // Item 0
        chaiModule.expect(updatedItems[0].name).to.equal('Conjured Mana Cake');
        chaiModule.expect(updatedItems[0].sellIn).to.equal(9);
        chaiModule.expect(updatedItems[0].quality).to.equal(8);
        // Item 1
        chaiModule.expect(updatedItems[1].name).to.equal('Conjured Mana Cake');
        chaiModule.expect(updatedItems[1].sellIn).to.equal(-11);
        chaiModule.expect(updatedItems[1].quality).to.equal(6);
        // Item 2
        chaiModule.expect(updatedItems[2].name).to.equal('Conjured Mana Cake');
        chaiModule.expect(updatedItems[2].sellIn).to.equal(9);
        chaiModule.expect(updatedItems[2].quality).to.equal(0);
        // Item 3
        chaiModule.expect(updatedItems[3].name).to.equal('Conjured Mana Cake');
        chaiModule.expect(updatedItems[3].sellIn).to.equal(9);
        chaiModule.expect(updatedItems[3].quality).to.equal(0);
    });

});