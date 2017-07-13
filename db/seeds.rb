# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
names = [
	"Apple MacBook Pro MD101HN/A (Mid 2012)",
	"Apple MacBook Pro MF839HN/A (Early 2015)",
	"Apple MacBook (Early 2016)",
	"Apple MacBook Air MJVM2HN/A (Early 2015)",
	"Apple MacBook Pro ME864HN/A (Late 2013)",
	"Apple MacBook Pro MJLQ2HN/A (Mid 2015)",
	"Apple MacBook Pro 13-inch MD102HN/A Mid 2012",
	"Apple MacBook Pro 13-inch Retina MGX92HN/A Mid 2014",
	"Apple MacBook Pro 15-inch Retina MGXA2HN/A Mid 2014",
	"Apple MacBook Pro MF840HN/A (Early 2015)",
	"Apple MacBook Pro MGXC2HN/A (Mid 2014)",
	"Apple MacBook Pro MD212HN/A Retina 128GB Late 2012",
	"Apple MacBook Pro MC976HN/A Retina Mid 2012",
	"Apple MacBook Air MJVE2HN/A (Early 2015)",
	"Apple MacBook Pro MJLT2HN/A (Mid 2015)",
	"Apple MacBook Pro MF841HN/A (Early 2015)",
	"Apple MacBook Air 128GB MD711HN/A Mid 2013",
	"Apple MacBook Air 64GB MD223HN/A Mid 2012",
	"Apple MacBook Air MJVP2HN/A (Early 2015)",
	"Apple MacBook Air MJVG2HN/A (Early 2015)"
]
descs = [
	"Core i5, 2.5 GHz↵DDR3L, 4GB, HDD+SSD/eMMC, 500GB↵13.3 inches, X 10.7.3 (11D2515)",
	"Core i5, 2.7 GHz↵LPDDR3 SDRAM, 8GB, SSD, 128GB↵13.3 inches, X 10.10.2 (14C2507)",
	"Core M, m3(1.1GHz), m5(1.2GHz), m7(1.3GHz)↵LPDDR3…↵12 inches, OS X El Capitan Latest model",
	"Core i5, 1.6 GHz↵LPDDR3 SDRAM, 4GB, SSD, 128GB↵11.6 inches, X 10.10.2 (14C2507)",
	"Core i5, 2.4 GHz↵DDR3L SDRAM, 4GB, SSD, 128GB↵13.3 inches, X 10.9 (13A2093)",
	"Core i7, 2.2 GHz↵DDR3L SDRAM, 16GB, SSD, 256GB↵15.4 inches, X 10.10.3 (14D2134)",
	"Core i7, 2.9 GHz↵DDR3L, 8GB, HDD+SSD/eMMC, 750GB↵13.3 inches, X 10.7.3 (11D2515)",
	"Core i5, 2.8 GHz↵DDR3L SDRAM, 8GB, SSD, 512GB↵13.3 inches, X 10.9.4 (13E28)",
	"Core i7, 2.2 GHz↵DDR3L SDRAM, 16GB, SSD, 256GB↵15.4 inches, X 10.9.4 (13E28)",
	"Core i5, 2.7 GHz↵LPDDR3 SDRAM, 8GB, SSD, 256GB↵13.3 inches, X 10.10.2 (14C2507)",
	"Core i7, 2.5 GHz↵DDR3L SDRAM, 16GB, SSD, 512GB↵15.4 inches, X 10.9.4 (13E28)",
	"Core i5, 2.5 GHz↵DDR3L SDRAM, 8GB, SSD, 128GB↵13.3 inches, X 10.8.2 (12C2034)",
	"Core i7, 2.6 GHz↵DDR3L SDRAM, 8GB, SSD, 512GB↵15.4 inches, X 10.7.4 (11E2068)",
	"Core i5, 1.6 GHz↵LPDDR3 SDRAM, 4GB, SSD, 128GB↵13.3 inches, X 10.10.2 (14C2507)",
	"Core i7, 2.5 GHz↵DDR3L SDRAM, 16GB, SSD, 512GB↵15.4 inches, X 10.10.3 (14D2134)",
	"Core i5, 2.9 GHz↵LPDDR3 SDRAM, 8GB, SSD, 512GB↵13.3 inches, X 10.10.2 (14C2507)",
	"Core i5, 1.3 GHz↵LPDDR3 SDRAM, 4GB, SSD, 128GB↵11.6 inches, X 10.8.4 (12E3067)",
	"Core i5, 1.7 GHz↵DDR3L SDRAM, 4GB, SSD, 64GB↵11.6 inches, X 10.7.4 (11E2520)",
	"Core i5, 1.6 GHz↵LPDDR3 SDRAM, 4GB, SSD, 256GB↵11.6 inches, X 10.10.2 (14C2507)",
	"Core i5, 1.6 GHz↵LPDDR3 SDRAM, 4GB, SSD, 256GB↵13.3 inches, X 10.10.2 (14C2507)"
]
20.times do |i|
	Product.create({ name: names[i], description: descs[i], price: 899 + i * 200})
end