import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  ExclamationTriangle,
  ExclamationTrianglePropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExclamationTriangle",
  component: ExclamationTriangle,
} as ComponentMeta<typeof ExclamationTriangle>;

const Template: ComponentStory<typeof ExclamationTriangle> = (
  args: ExclamationTrianglePropsI
) => (
  <x.div display="flex" gap="20px">
    <ExclamationTriangle {...args} />
    <ExclamationTriangle {...args} fill="red.500" />
    <ExclamationTriangle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
