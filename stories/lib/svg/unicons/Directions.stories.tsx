import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Directions, DirectionsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Directions",
  component: Directions,
} as ComponentMeta<typeof Directions>;

const Template: ComponentStory<typeof Directions> = (
  args: DirectionsPropsI
) => (
  <x.div display="flex" gap="20px">
    <Directions {...args} />
    <Directions {...args} fill="red.500" />
    <Directions {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
