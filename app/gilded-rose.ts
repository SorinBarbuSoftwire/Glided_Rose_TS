export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            /* Quality */
            // Decrease
            if (this.items[i].name !== 'Aged Brie' &&
                this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert' &&
                this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                // Base
                this.items[i].quality -= 1;
                if (this.items[i].sellIn <= 0) {
                    this.items[i].quality -= 1;
                }
                // Boundary check
                if (this.items[i].quality < 0) {
                    this.items[i].quality = 0;
                }

            }
            else {
                // Increase
                if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                    // Base
                    this.items[i].quality = this.items[i].quality + 1;
                    if (this.items[i].name === 'Aged Brie' && this.items[i].sellIn < 0) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }
                    if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 11) {
                            this.items[i].quality = this.items[i].quality + 1
                        }
                        if (this.items[i].sellIn < 6) {
                            this.items[i].quality = this.items[i].quality + 1
                        }
                        if (this.items[i].sellIn <= 0) {
                            this.items[i].quality = 0;
                        }
                    }
                }
                // Keep
            }
            // Boundary check
            if (this.items[i].quality > 50) {
                this.items[i].quality = 50;
            }

            /* SellIn */
            if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
        }

        return this.items;
    }
}