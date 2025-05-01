export type MenuCategory = 'appetizers' | 'mains' | 'desserts';

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  dietary?: string[];
}

export interface Testimonial {
  name: string;
  event: string;
  quote: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    name: 'Wild Mushroom Arancini',
    description: 'Crispy risotto balls with wild mushrooms, truffle oil, and parmesan',
    price: 14,
    image: 'https://images.pexels.com/photos/8696567/pexels-photo-8696567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'appetizers',
    dietary: ['Vegetarian']
  },
  {
    name: 'Seared Scallops',
    description: 'Pan-seared scallops with cauliflower purée and pancetta crisp',
    price: 18,
    image: 'https://images.pexels.com/photos/8850735/pexels-photo-8850735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'appetizers',
    dietary: ['Gluten-Free']
  },
  {
    name: 'Heirloom Tomato Salad',
    description: 'Local heirloom tomatoes with burrata, basil oil, and aged balsamic',
    price: 16,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'appetizers',
    dietary: ['Vegetarian', 'Gluten-Free']
  },
  {
    name: 'Filet Mignon',
    description: 'Grass-fed filet with truffle potato purée and red wine reduction',
    price: 42,
    image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mains',
    dietary: ['Gluten-Free']
  },
  {
    name: 'Cedar Plank Salmon',
    description: 'Wild-caught salmon with seasonal vegetables and citrus beurre blanc',
    price: 36,
    image: 'https://images.pexels.com/photos/8697568/pexels-photo-8697568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mains',
    dietary: ['Gluten-Free']
  },
  {
    name: 'Wild Mushroom Risotto',
    description: 'Creamy Arborio rice with seasonal wild mushrooms and black truffle',
    price: 28,
    image: 'https://images.pexels.com/photos/5638767/pexels-photo-5638767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mains',
    dietary: ['Vegetarian', 'Gluten-Free']
  },
  {
    name: 'Dark Chocolate Soufflé',
    description: 'Warm chocolate soufflé with vanilla bean ice cream',
    price: 14,
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'desserts',
    dietary: ['Vegetarian']
  },
  {
    name: 'Lemon Tart',
    description: 'Tangy lemon curd in a buttery shortbread crust with berries',
    price: 12,
    image: 'https://images.pexels.com/photos/2928378/pexels-photo-2928378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'desserts',
    dietary: ['Vegetarian']
  },
  {
    name: 'Vanilla Bean Panna Cotta',
    description: 'Silky Italian custard with seasonal fruit compote',
    price: 11,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'desserts',
    dietary: ['Vegetarian', 'Gluten-Free']
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Emily & Michael Johnson',
    event: 'Wedding Celebration',
    quote: 'GourmetElite exceeded our expectations in every way. From the initial tasting to the flawless execution on our wedding day, their attention to detail and personalized service made our celebration truly unforgettable.',
    image: 'https://images.pexels.com/photos/1034058/pexels-photo-1034058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Jonathan Reynolds',
    event: 'Corporate Gala',
    quote: 'Our annual corporate gala needed to impress clients and stakeholders alike. GourmetElite delivered an exceptional culinary experience that became the highlight of the evening. Their professionalism and creativity are unmatched.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Sophia Martinez',
    event: 'Private Dinner Party',
    quote: 'The private chef experience provided by GourmetElite transformed my dinner party into an extraordinary culinary journey. My guests are still talking about the incredible flavors and presentation months later.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];