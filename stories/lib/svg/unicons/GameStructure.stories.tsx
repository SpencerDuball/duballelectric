import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { GameStructure, GameStructurePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GameStructure",
  component: GameStructure,
} as ComponentMeta<typeof GameStructure>;

const Template: ComponentStory<typeof GameStructure> = (
  args: GameStructurePropsI
) => (
  <x.div display="flex" gap="20px">
    <GameStructure {...args} />
    <GameStructure {...args} fill="red.500" />
    <GameStructure {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
