import React from 'react'
import RecipeList from '../Presentational/Recipes/RecipeList';

export default function Root() {

  const testData = [
    {
        recipe_id: "138de9b7-15ca-4c1a-965e-d161eeb6a46f",
        user_id: "eb81c150-8211-44e5-8913-2444e2bf71f5",
        recipe_name: "Chicken Tikka Masala Sauce Recipe",
        saved_timestamp: "2020-05-08T04:03:52.080Z",
        id: "138de9b7-15ca-4c1a-965e-d161eeb6a46f",
        name: "Chicken Tikka Masala Sauce Recipe",
        ingredients: "2 tablespoons ghee (clarified butter)\\n 1 onion, finely chopped\\n 4 cloves garlic, minced\\n 1 tablespoon ground cumin\\n 1 teaspoon salt\\n 1 teaspoon ground ginger\\n 1 teaspoon cayenne pepper\\n Â½ teaspoon ground cinnamon\\n Â¼ teaspoon ground turmeric\\n 1 (14 ounce) can tomato sauce\\n 1 cup heavy whipping cream\\n 2 teaspoons paprika\\n 1 tablespoon white sugar\\n 1 tablespoon vegetable oil\\n 4 skinless, boneless chicken breast halves, cut into bite-size pieces\\n Â½ teaspoon curry powder\\n Â½ teaspoon salt, or to taste (optional)\\n 1 teaspoon white sugar, or to taste (optional)",
        instructions: "Step 1\\n Heat ghee in a large skillet over medium heat and cook and stir onion until translucent, about 5 minutes. Stir in garlic; cook and stir just until fragrant, about 1 minute. Stir cumin, 1 teaspoon salt, ginger, cayenne pepper, cinnamon, and turmeric into the onion mixture; fry until fragrant, about 2 minutes.\\n Step 2\\n Stir tomato sauce into the onion and spice mixture, bring to a boil, and reduce heat to low. Simmer sauce for 10 minutes, then mix in cream, paprika, and 1 tablespoon sugar. Bring sauce back to a simmer and cook, stirring often, until sauce is thickened, 10 to 15 minutes.\\n Step 3\\n Heat vegetable oil in a separate skillet over medium heat. Stir chicken into the hot oil, sprinkle with curry powder, and sear chicken until lightly browned but still pink inside, about 3 minutes; stir often. Transfer chicken and any pan juices into the sauce. Simmer chicken in sauce until no longer pink, about 30 minutes; adjust salt and sugar to taste.",
        nutrition: "328 calories; 23.4 g total fat; 106 mg cholesterol; 980 mg odium. 13.2 g carbohydrates; 17.9 g protein",
        summary: "Recipe Summary\\n prep:\\n 15 mins\\n cook:\\n 1 hr 5 mins\\n total:\\n 1 hr 20 mins\\n Servings:\\n 6\\n",
        image_url: null
    }
]


  return (
    <div className="root">
      <RecipeList recipes={testData} />
    </div>
  )
}
