import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LocationArrow, LocationArrowPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LocationArrow",
  component: LocationArrow,
} as ComponentMeta<typeof LocationArrow>;

const Template: ComponentStory<typeof LocationArrow> = (
  args: LocationArrowPropsI
) => (
  <x.div display="flex" gap="20px">
    <LocationArrow {...args} />
    <LocationArrow {...args} fill="red.500" />
    <LocationArrow {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
