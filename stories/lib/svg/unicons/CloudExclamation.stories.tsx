import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudExclamation, CloudExclamationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudExclamation",
  component: CloudExclamation,
} as ComponentMeta<typeof CloudExclamation>;

const Template: ComponentStory<typeof CloudExclamation> = (
  args: CloudExclamationPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudExclamation {...args} />
    <CloudExclamation {...args} fill="red.500" />
    <CloudExclamation {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
