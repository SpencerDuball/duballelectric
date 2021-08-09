import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Swiggy, SwiggyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Swiggy",
  component: Swiggy,
} as ComponentMeta<typeof Swiggy>;

const Template: ComponentStory<typeof Swiggy> = (args: SwiggyPropsI) => (
  <x.div display="flex" gap="20px">
    <Swiggy {...args} />
    <Swiggy {...args} fill="red.500" />
    <Swiggy {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
