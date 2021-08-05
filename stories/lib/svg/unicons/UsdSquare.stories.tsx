import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { UsdSquare, UsdSquarePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/UsdSquare",
  component: UsdSquare,
} as ComponentMeta<typeof UsdSquare>;

const Template: ComponentStory<typeof UsdSquare> = (args: UsdSquarePropsI) => (
  <x.div display="flex" gap="20px">
    <UsdSquare {...args} />
    <UsdSquare {...args} fill="red.500" />
    <UsdSquare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
