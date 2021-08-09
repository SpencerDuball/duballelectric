import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudSunTear, CloudSunTearPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudSunTear",
  component: CloudSunTear,
} as ComponentMeta<typeof CloudSunTear>;

const Template: ComponentStory<typeof CloudSunTear> = (
  args: CloudSunTearPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudSunTear {...args} />
    <CloudSunTear {...args} fill="red.500" />
    <CloudSunTear {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
