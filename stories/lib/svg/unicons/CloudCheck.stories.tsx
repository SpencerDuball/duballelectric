import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudCheck, CloudCheckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudCheck",
  component: CloudCheck,
} as ComponentMeta<typeof CloudCheck>;

const Template: ComponentStory<typeof CloudCheck> = (
  args: CloudCheckPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudCheck {...args} />
    <CloudCheck {...args} fill="red.500" />
    <CloudCheck {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
