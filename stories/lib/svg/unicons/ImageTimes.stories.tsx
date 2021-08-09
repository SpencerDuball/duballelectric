import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageTimes, ImageTimesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageTimes",
  component: ImageTimes,
} as ComponentMeta<typeof ImageTimes>;

const Template: ComponentStory<typeof ImageTimes> = (
  args: ImageTimesPropsI
) => (
  <x.div display="flex" gap="20px">
    <ImageTimes {...args} />
    <ImageTimes {...args} fill="red.500" />
    <ImageTimes {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
