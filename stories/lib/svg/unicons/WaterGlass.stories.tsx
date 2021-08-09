import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WaterGlass, WaterGlassPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WaterGlass",
  component: WaterGlass,
} as ComponentMeta<typeof WaterGlass>;

const Template: ComponentStory<typeof WaterGlass> = (
  args: WaterGlassPropsI
) => (
  <x.div display="flex" gap="20px">
    <WaterGlass {...args} />
    <WaterGlass {...args} fill="red.500" />
    <WaterGlass {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
