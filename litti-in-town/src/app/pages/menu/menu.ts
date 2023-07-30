import { menuInterface } from './InMenu';
import * as uuid from 'uuid';

export const littiMenu: menuInterface[] = [
  {
    category: 'Litti',
    categoryItems: [
      {
        id: uuid.v4(),
        name: 'Litti (Sattu) with Ghee',
        desc: 'Traditional baked litti (stuffed with Sattu - gram flour) - tossed and accompanied with Ghee. Along with Chokha (Roasted - potato, brinjal & tomato mash) and green coriander chutney',
        price: '160',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/Litti_Sattu_And2in1And_3in1_withChokha.JPG',
      },

      {
        id: uuid.v4(),
        name: 'Aloo Dhaniya Litti with Ghee',
        desc: 'Baked litti (stuffed with potato and coriander) - tossed and accompanied with Ghee. Along with Chokha (Roasted - potato, brinjal & tomato mash) and green coriander chutney.',
        price: '160',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/AlooDhaniyaLitti.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Aloo Methi Litti with Ghee',
        desc: 'Baked litti (stuffed with potato and fenugreek) - tossed and Baked Litti accompanied with Ghee. Along with Chokha (Roasted - potato, brinjal & tomato mash) and green coriander chutney.',
        price: '160',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/AlooMethiLitti.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Paneer Litti with Ghee',
        desc: 'Baked litti (stuffed with Paneer) - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
        price: '200',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/PaneerLitti.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Mushroom & Veg Litti with Ghee',
        desc: 'Baked litti (stuffed with mushroom and mixed veg) - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
        price: '180',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/MushroomAndVegLitti.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Soyabean Litti with Ghee',
        desc: 'Baked litti (stuffed with soyabean) - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
        price: '160',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/SoyabeanLitti.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Egg Bhurji Litti with Ghee',
        desc: 'Baked litti (stuffed with scrambled eggs) - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
        price: '180',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/EggBhurjiLitti.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Chicken Keema Litti with Ghee',
        desc: 'Baked litti (stuffed with fresh minced chicken meat) - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
        price: '220',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/ChickenKeemaLittiWithGhee.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Mutton Keema Litti with Ghee',
        desc: 'Baked litti (stuffed with fresh minced goat meat) - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
        price: '300',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/ChickenKeemaLittiWithGhee.JPG',
      }
    ]
  },
  {
    category: 'Main Course',
    categoryItems : [
        {
            id: uuid.v4(),
            name: 'Chicken Masala',
            desc: 'Made with Fresh chicken meat (not frozen) and traditional home-made spices',
            price: '280',
            perPlate: '4 pcs per plate',
            itemImg:
              'assets/images/menu/mainCourse/ChickenMasala.JPG',
          },
          {
            id: uuid.v4(),
            name: 'Mutton Masala ',
            desc: 'Made with Fresh goat meat (not frozen) and traditional home-made spices',
            price: '350',
            perPlate: '2 pcs per plate',
            itemImg:
              'assets/images/menu/mainCourse/MuttonMasala.JPG',
          }
    ]
  },
  {
    category: 'Coolers',
    categoryItems : [
        {
            id: uuid.v4(),
            name: 'Classic Sattu',
            desc: 'Made with sattu (gram flour) and home-made spices. Refreshing and nutritious - desi protein drink.',
            price: '80',
            perPlate: '330 ml',
            itemImg:
              'assets/images/menu/coolers/ClassicSattu.JPG',
          },
          {
            id: uuid.v4(),
            name: 'Masala Sattu ',
            desc: 'Made with sattu (gram flour), onion, coriander and home-made spices. Refreshing and nutritious - desi protein drink.',
            price: '100',
            perPlate: '330 ml',
            itemImg:
              'assets/images/menu/coolers/MasalaSattu.JPG',
          },
          {
            id: uuid.v4(),
            name: 'Pudina Sattu ',
            desc: 'Made with sattu (gram flour), pudina and home-made spices. Refreshing and nutritious - desi protein drink.',
            price: '100',
            perPlate: '330 ml',
            itemImg:
              'assets/images/menu/coolers/PudinaSattu.JPG',
          }
    ]
  },
  {
    category: 'Combos',
    categoryItems : [
        {
            id: uuid.v4(),
            name: 'Litti Mini-Party',
            desc: 'Traditional baked litti (stuffed with Sattu - gram flour) - tossed and accompanied with Ghee. Along with Chokha (Roasted - potato, brinjal & tomato mash) and green coriander chutney.',
            price: '600',
            perPlate: '12 pcs per plate',
            itemImg:
            'assets/images/CombosAssortedPlatter.JPG',
          },
          {
            id: uuid.v4(),
            name: 'Litti Party ',
            desc: 'Traditional baked litti (stuffed with Sattu - gram flour) - tossed and accompanied with Ghee. Along with Chokha (Roasted - potato, brinjal & tomato mash) and green coriander chutney.',
            price: '1180',
            perPlate: '24 pcs per plate',
            itemImg:
            'assets/images/CombosAssortedPlatter.JPG',
          }
    ]
  },

  {
    category: 'Assorted Platter',
    categoryItems: [
      {
        id: uuid.v4(),
        name: 'Litti (Sattu) with Ghee',
        desc: 'Traditional baked litti (stuffed with Sattu - gram flour) - tossed and accompanied with Ghee. Along with Chokha (Roasted - potato, brinjal & tomato mash) and green coriander chutney',
        price: '160',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/Litti_Sattu_And2in1And_3in1_withChokha.JPG',
      },

      {
        id: uuid.v4(),
        name: 'Aloo Dhaniya Litti with Ghee',
        desc: 'Baked litti (stuffed with potato and coriander) - tossed and accompanied with Ghee. Along with Chokha (Roasted - potato, brinjal & tomato mash) and green coriander chutney.',
        price: '160',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/AlooDhaniyaLitti.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Aloo Methi Litti with Ghee',
        desc: 'Baked litti (stuffed with potato and fenugreek) - tossed and Baked Litti accompanied with Ghee. Along with Chokha (Roasted - potato, brinjal & tomato mash) and green coriander chutney.',
        price: '160',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/AlooMethiLitti.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Paneer Litti with Ghee',
        desc: 'Baked litti (stuffed with Paneer) - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
        price: '200',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/PaneerLitti.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Mushroom & Veg Litti with Ghee',
        desc: 'Baked litti (stuffed with mushroom and mixed veg) - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
        price: '180',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/MushroomAndVegLitti.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Soyabean Litti with Ghee',
        desc: 'Baked litti (stuffed with soyabean) - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
        price: '160',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/SoyabeanLitti.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Egg Bhurji Litti with Ghee',
        desc: 'Baked litti (stuffed with scrambled eggs) - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
        price: '180',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/EggBhurjiLitti.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Chicken Keema Litti with Ghee',
        desc: 'Baked litti (stuffed with fresh minced chicken meat) - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
        price: '220',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/ChickenKeemaLittiWithGhee.JPG',
      },
      {
        id: uuid.v4(),
        name: 'Mutton Keema Litti with Ghee',
        desc: 'Baked litti (stuffed with fresh minced goat meat) - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
        price: '300',
        perPlate: '3 pcs per plate',
        itemImg:
          'assets/images/menu/litti/ChickenKeemaLittiWithGhee.JPG',
      }
    ]
  },


  {
    category: '3 in 1',
    categoryItems : [
        {
            id: uuid.v4(),
            name: 'Litti (Ghee) with Chokha',
            desc: '[1 Sattu + 1 Aloo Dhaniya + 1 Aloo Methi] Baked litti - tossed and accompanied with Ghee. Along with Chokha (Roasted - potato, brinjal & tomato mash) and green coriander chutney.',
            price: '160',
            perPlate: '3 pcs per plate',
            itemImg:
              'assets/images/menu/2in1and3in1/Litti_Sattu_And_2in1_And_3in1_withChokha.JPG',
          },
          {
            id: uuid.v4(),
            name: 'Litti (Ghee) with Dips',
            desc: 'Choose 1pc each of any 3 baked litti`s - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney. ',
            price: '160',
            perPlate: 'depends upon choice',
            itemImg:
            'assets/images/menu/2in1and3in1/2in1And3in1_withDips.JPG',
          }
    ]
  },

  {
    category: '2 in 1',
    categoryItems : [
        {
            id: uuid.v4(),
            name: 'Litti (Ghee) with Chokha',
            desc: '[2pcs (any of Sattu or Aloo) + 1pc (any of Aloo or Sattu)] Baked litti - tossed and accompanied with Ghee. Along with Chokha (Roasted - potato, brinjal & tomato mash) and green coriander chutney..',
            price: '160',
            perPlate: '3 pcs per plate',
            itemImg:
              'assets/images/menu/2in1and3in1/Litti_Sattu_And_2in1_And_3in1_withChokha.JPG',
          },
          {
            id: uuid.v4(),
            name: 'Litti (Ghee) with Dips',
            desc: 'Choose (2pc + 1pc) of any two baked litti`s - tossed with Ghee. Along with chilli garlic dip, veg mayonnaise and green coriander chutney.',
            price: '160',
            perPlate: 'depends upon choice',
            itemImg:
            'assets/images/menu/2in1and3in1/2in1And3in1_withDips.JPG',
          }
    ]
  },

  {
    category: 'Meals',
    categoryItems : [
        {
            id: uuid.v4(),
            name: 'Litti & Chicken',
            desc: 'Traditional baked litti [3pcs] (stuffed with Sattu - gram flour) - tossed and accompanied with Ghee. Along with Chokha (Roasted - potato, brinjal & tomato mash) and green coriander chutney. Chicken masala [2pcs] made with Fresh chicken meat (not frozen) and home-made spices.',
            price: '300',
            perPlate: '',
            itemImg:
              'assets/images/menu/meals/Meals_LittiChicken.JPG',
          },
          {
            id: uuid.v4(),
            name: 'Litti & Mutton',
            desc: 'Traditional baked litti [3pcs] (stuffed with Sattu - gram flour) - tossed and accompanied with Ghee. Along with Chokha (Roasted - potato, brinjal & tomato mash) and green coriander chutney. Mutton masala [2pcs] made with Fresh goat meat (not Frozen) and home-made spices. ',
            price: '500',
            perPlate: '',
            itemImg:
            'assets/images/menu/meals/Meals_LittiMutton.JPG',
          }
    ]
  },

  {
    category: 'Add-Ons',
    categoryItems : [
        {
            id: uuid.v4(),
            name: 'Chokha',
            desc: 'Roasted - potato, brinjal & tomato mash (mixed with traditional home-made spices)',
            price: '60',
            perPlate: '180 ml',
            itemImg:
              '',
          },
          {
            id: uuid.v4(),
            name: 'Green Coriander Chutney',
            desc: 'Green Coriander Chutney ',
            price: '20',
            perPlate: '90 ml',
            itemImg:
            '',
          },
          {
            id: uuid.v4(),
            name: 'Chilli Garlic Dip',
            desc: 'Chilli Garlic Dip ',
            price: '30',
            perPlate: '90 ml',
            itemImg:
            '',
          }
    ]
  }

];

