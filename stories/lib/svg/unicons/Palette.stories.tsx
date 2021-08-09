import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Palette, PalettePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Palette",
  component: Palette,
} as ComponentMeta<typeof Palette>;

const Template: ComponentStory<typeof Palette> = (args: PalettePropsI) => (
  <x.div display="flex" gap="20px">
    <Palette {...args} />
    <Palette {...args} fill="red.500" />
    <Palette {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
