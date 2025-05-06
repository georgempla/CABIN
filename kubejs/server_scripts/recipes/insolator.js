ServerEvents.recipes(event => {
    // Remove existing insolator flower recipes since we're adding them back anyways
    event.remove({ type: "thermal:insolator", input: "#minecraft:flowers", not:{ input:"#minecraft:saplings" } })

    Ingredient.of("#minecraft:flowers").itemIds.forEach(flower => {
        // Automatically adds all flowers as thermal insolator recipes. We're blacklisting special cases like leaves and saplings which are occasionally tagged as flowers for some reason
        if( !( Ingredient.of("#minecraft:saplings").test(flower) || Ingredient.of("#minecraft:leaves").test(flower) ) ) {
            event.custom({
                "type": "thermal:insolator",
                "ingredient": {
                    "item": flower
                },
                "result": [
                    {
                    "item": flower,
                    "chance": 2
                    }
                ],
                "experience": 0
            })
        }
    })
})
