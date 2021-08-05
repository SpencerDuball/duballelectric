import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { InfoCircle, InfoCirclePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/InfoCircle",
  component: InfoCircle,
} as ComponentMeta<typeof InfoCircle>;

const Template: ComponentStory<typeof InfoCircle> = (
  args: InfoCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <InfoCircle {...args} />
    <InfoCircle {...args} fill="red.500" />
    <InfoCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
