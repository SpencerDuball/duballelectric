import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { StarHalfAlt, StarHalfAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/StarHalfAlt",
  component: StarHalfAlt,
} as ComponentMeta<typeof StarHalfAlt>;

const Template: ComponentStory<typeof StarHalfAlt> = (
  args: StarHalfAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <StarHalfAlt {...args} />
    <StarHalfAlt {...args} fill="red.500" />
    <StarHalfAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
