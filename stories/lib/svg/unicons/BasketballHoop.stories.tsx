import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BasketballHoop, BasketballHoopPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BasketballHoop",
  component: BasketballHoop,
} as ComponentMeta<typeof BasketballHoop>;

const Template: ComponentStory<typeof BasketballHoop> = (
  args: BasketballHoopPropsI
) => (
  <x.div display="flex" gap="20px">
    <BasketballHoop {...args} />
    <BasketballHoop {...args} fill="red.500" />
    <BasketballHoop {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
