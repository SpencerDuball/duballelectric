import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ExposureAlt, ExposureAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ExposureAlt",
  component: ExposureAlt,
} as ComponentMeta<typeof ExposureAlt>;

const Template: ComponentStory<typeof ExposureAlt> = (
  args: ExposureAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <ExposureAlt {...args} />
    <ExposureAlt {...args} fill="red.500" />
    <ExposureAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
