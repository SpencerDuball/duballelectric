import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Shovel, ShovelPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Shovel",
  component: Shovel,
} as ComponentMeta<typeof Shovel>;

const Template: ComponentStory<typeof Shovel> = (args: ShovelPropsI) => (
  <x.div display="flex" gap="20px">
    <Shovel {...args} />
    <Shovel {...args} fill="red.500" />
    <Shovel {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
