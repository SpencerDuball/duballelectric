import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Analytics, AnalyticsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Analytics",
  component: Analytics,
} as ComponentMeta<typeof Analytics>;

const Template: ComponentStory<typeof Analytics> = (args: AnalyticsPropsI) => (
  <x.div display="flex" gap="20px">
    <Analytics {...args} />
    <Analytics {...args} fill="red.500" />
    <Analytics {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
