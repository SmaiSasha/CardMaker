import { CardTemplateType } from "../types/types"

const cardTemplates: CardTemplateType[] = [
    {
        title: "Christmas",
        previewImageSrc: "images/cardTemplates/christmas.png",
        data: {
            canvas: { width: 800, height: 600 },
            filter: { r: 0, g: 0, b: 0, a: 0 },
            objects: [
                {
                    height: 620,
                    id: "1704573406786",
                    imageSrc: "images/imageObjects/christmasBackground.jpg",
                    isSelected: false,
                    posX: -72,
                    posY: -9,
                    width: 933,
                },
                {
                    id: "1704573421309",
                    isSelected: false,
                    posX: 40,
                    posY: 460,
                    width: 430,
                    height: 50,
                    content: "С Рождеством!\n\n",
                    fontColor: "white",
                    fontSize: 40,
                    fontFamily: "Verdana",
                    decorations: [],
                },
            ],
        },
    },
    {
        title: "Birthday",
        previewImageSrc: "images/cardTemplates/birthday.png",
        data: {
            canvas: { width: 800, height: 600 },
            filter: { r: 0, g: 0, b: 0, a: 0 },
            objects: [
                {
                    height: 620,
                    id: "1704765786",
                    imageSrc: "images/imageObjects/birthdayBackground.jpg",
                    isSelected: false,
                    posX: -72,
                    posY: -9,
                    width: 933,
                },
                {
                    id: "1703453421309",
                    isSelected: false,
                    posX: 40,
                    posY: 30,
                    width: 429,
                    height: 50,
                    content: "С днем рождения!",
                    fontColor: "white",
                    fontSize: 40,
                    fontFamily: "Verdana",
                    decorations: [],
                },
            ],
        },
    },
]

export { cardTemplates }
