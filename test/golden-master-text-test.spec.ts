const chaiModule_ = require('chai');
const glidedRoseModule_ = require('../app/gilded-rose');

describe('Gilded Rose - Golden Master Test', function () {

    it('General Test', function() {
        // Given
        const initialItems = [
            new glidedRoseModule_.Item('Product1', 10, 10),
            new glidedRoseModule_.Item('Product2', 0, 10),
            new glidedRoseModule_.Item('Product3', -1, 0),
            new glidedRoseModule_.Item('Aged Brie', 8, 20),
            new glidedRoseModule_.Item('Aged Brie', -8, 20),
            new glidedRoseModule_.Item('Aged Brie', -8, 49),
            new glidedRoseModule_.Item('Sulfuras, Hand of Ragnaros', 10, 40),
            new glidedRoseModule_.Item('Sulfuras, Hand of Ragnaros', -10, 40),
            new glidedRoseModule_.Item('Backstage passes to a TAFKAL80ETC concert', 20, 30),
            new glidedRoseModule_.Item('Backstage passes to a TAFKAL80ETC concert', 10, 30),
            new glidedRoseModule_.Item('Backstage passes to a TAFKAL80ETC concert', 5, 30),
            new glidedRoseModule_.Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)

        ];
        const gildedRose = new glidedRoseModule_.GildedRose(initialItems);

        // When
        const updatedItems = gildedRose.updateQuality();

        // Then
        // Item 0
        chaiModule_.expect(updatedItems[0].name).to.equal('Product1');
        chaiModule_.expect(updatedItems[0].sellIn).to.equal(9);
        chaiModule_.expect(updatedItems[0].quality).to.equal(9);
        // Item 1
        chaiModule_.expect(updatedItems[1].name).to.equal('Product2');
        chaiModule_.expect(updatedItems[1].sellIn).to.equal(-1);
        chaiModule_.expect(updatedItems[1].quality).to.equal(8);
        // Item 2
        chaiModule_.expect(updatedItems[2].name).to.equal('Product3');
        chaiModule_.expect(updatedItems[2].sellIn).to.equal(-2);
        chaiModule_.expect(updatedItems[2].quality).to.equal(0);
        // Item 3
        chaiModule_.expect(updatedItems[3].name).to.equal('Aged Brie');
        chaiModule_.expect(updatedItems[3].sellIn).to.equal(7);
        chaiModule_.expect(updatedItems[3].quality).to.equal(21);
        // Item 4
        chaiModule_.expect(updatedItems[4].name).to.equal('Aged Brie');
        chaiModule_.expect(updatedItems[4].sellIn).to.equal(-9);
        chaiModule_.expect(updatedItems[4].quality).to.equal(22);
        // Item 5
        chaiModule_.expect(updatedItems[5].name).to.equal('Aged Brie');
        chaiModule_.expect(updatedItems[5].sellIn).to.equal(-9);
        chaiModule_.expect(updatedItems[5].quality).to.equal(50);
        // Item 6
        chaiModule_.expect(updatedItems[6].name).to.equal('Sulfuras, Hand of Ragnaros');
        chaiModule_.expect(updatedItems[6].sellIn).to.equal(10);
        chaiModule_.expect(updatedItems[6].quality).to.equal(40);
        // Item 7
        chaiModule_.expect(updatedItems[7].name).to.equal('Sulfuras, Hand of Ragnaros');
        chaiModule_.expect(updatedItems[7].sellIn).to.equal(-10);
        chaiModule_.expect(updatedItems[7].quality).to.equal(40);
        // Item 8
        chaiModule_.expect(updatedItems[8].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        chaiModule_.expect(updatedItems[8].sellIn).to.equal(19);
        chaiModule_.expect(updatedItems[8].quality).to.equal(31);
        // Item 9
        chaiModule_.expect(updatedItems[9].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        chaiModule_.expect(updatedItems[9].sellIn).to.equal(9);
        chaiModule_.expect(updatedItems[9].quality).to.equal(32);
        // Item 10
        chaiModule_.expect(updatedItems[10].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        chaiModule_.expect(updatedItems[10].sellIn).to.equal(4);
        chaiModule_.expect(updatedItems[10].quality).to.equal(33);
        // Item 11
        chaiModule_.expect(updatedItems[11].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        chaiModule_.expect(updatedItems[11].sellIn).to.equal(-1);
        chaiModule_.expect(updatedItems[11].quality).to.equal(0);
    });
});