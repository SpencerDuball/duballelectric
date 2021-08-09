import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudShowersHeavy, CloudShowersHeavyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudShowersHeavy",
  component: CloudShowersHeavy,
} as ComponentMeta<typeof CloudShowersHeavy>;

const Template: ComponentStory<typeof CloudShowersHeavy> = (
  args: CloudShowersHeavyPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudShowersHeavy {...args} />
    <CloudShowersHeavy {...args} fill="red.500" />
    <CloudShowersHeavy {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
