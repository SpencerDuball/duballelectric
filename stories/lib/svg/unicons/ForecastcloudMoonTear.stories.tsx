import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  ForecastcloudMoonTear,
  ForecastcloudMoonTearPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ForecastcloudMoonTear",
  component: ForecastcloudMoonTear,
} as ComponentMeta<typeof ForecastcloudMoonTear>;

const Template: ComponentStory<typeof ForecastcloudMoonTear> = (
  args: ForecastcloudMoonTearPropsI
) => (
  <x.div display="flex" gap="20px">
    <ForecastcloudMoonTear {...args} />
    <ForecastcloudMoonTear {...args} fill="red.500" />
    <ForecastcloudMoonTear {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
