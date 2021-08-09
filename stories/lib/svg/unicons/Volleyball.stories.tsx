import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Volleyball, VolleyballPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Volleyball",
  component: Volleyball,
} as ComponentMeta<typeof Volleyball>;

const Template: ComponentStory<typeof Volleyball> = (
  args: VolleyballPropsI
) => (
  <x.div display="flex" gap="20px">
    <Volleyball {...args} />
    <Volleyball {...args} fill="red.500" />
    <Volleyball {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
